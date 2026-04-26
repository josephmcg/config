import { eslintCompatPlugin, type Comment, type CreateOnceRule } from '@oxlint/plugins'

const DIRECTIVE_PATTERN =
  /^(?:(?:eslint|oxlint)(?:-env|-enable|-disable(?:(?:-next)?-line)?)?|exported|globals?)(?:\s|$)/u

/**
 * Kinds that only apply in block comments, not `//` line comments.
 * Line-style `oxlint-disable` / `oxlint-enable` apply from that line onward (file-wide when at top).
 */
const BLOCK_ONLY_DIRECTIVE_KINDS: ReadonlySet<string> = new Set(['exported', 'global', 'globals'])

const IGNORABLE_KINDS_LIST = [
  'oxlint',
  'oxlint-disable',
  'oxlint-disable-line',
  'oxlint-disable-next-line',
  'oxlint-enable',
  'oxlint-env',
  'exported',
  'global',
  'globals',
] as const

const IGNORABLE_KINDS = new Set<string>(IGNORABLE_KINDS_LIST)

interface ParsedDirective {
  kind: string
  value: string
  /** Explanation after ` -- ` when present; otherwise `undefined`. */
  description: string | undefined
}

function divideDirectiveComment(value: string): {
  text: string
  description: string | undefined
} {
  const divided = value.split(/\s-{2,}\s/u)
  const text = divided[0]?.trim() ?? ''
  const tail = divided.length > 1 ? divided[1]?.trim() : undefined
  return {
    text,
    description: tail === undefined || tail === '' ? undefined : tail,
  }
}

function parseDirectiveText(textToParse: string): ParsedDirective | undefined {
  const { text, description } = divideDirectiveComment(textToParse)
  const match = DIRECTIVE_PATTERN.exec(text)

  if (!match) {
    return undefined
  }

  const matchedText = match[0]
  const rest = text.slice(match.index + matchedText.length)

  let kind = matchedText.trim()
  if (kind.startsWith('eslint')) {
    kind = kind.replace(/^eslint/u, 'oxlint')
  }

  return { kind, value: rest.trim(), description }
}

function parseDirectiveComment(comment: Comment): ParsedDirective | undefined {
  const parsed = parseDirectiveText(comment.value.trim())
  if (!parsed) {
    return undefined
  }

  if (comment.type === 'Line' && BLOCK_ONLY_DIRECTIVE_KINDS.has(parsed.kind)) {
    return undefined
  }

  if (parsed.kind === 'oxlint-disable-line' && comment.loc.start.line !== comment.loc.end.line) {
    return undefined
  }

  return parsed
}

const ruleRequireDescription: CreateOnceRule = {
  meta: {
    docs: {
      description: 'require descriptions on oxlint/eslint directive comments',
      recommended: false,
    },
    messages: {
      missingDescription: 'Include a description to explain why you disabled the rule.',
    },
    schema: {
      type: 'object' as const,
      properties: {
        ignore: {
          type: 'array' as const,
          items: {
            enum: [...IGNORABLE_KINDS_LIST],
          },
          uniqueItems: true,
        },
      },
      additionalProperties: false,
    },
  },
  /** Prefer `createOnce` so Oxlint can optimize JS plugin dispatch (see Oxlint “Writing JS plugins”). */
  createOnce(context) {
    const ignores = new Set<string>()
    const optionsObject = context.options?.[0]
    if (
      optionsObject !== null &&
      optionsObject !== undefined &&
      typeof optionsObject === 'object' &&
      !Array.isArray(optionsObject) &&
      'ignore' in optionsObject
    ) {
      const rawIgnore = optionsObject['ignore']
      if (Array.isArray(rawIgnore)) {
        for (const item of rawIgnore) {
          if (typeof item === 'string' && IGNORABLE_KINDS.has(item)) {
            ignores.add(item)
          }
        }
      }
    }

    return {
      Program() {
        for (const comment of context.sourceCode.getAllComments()) {
          const directive = parseDirectiveComment(comment)
          if (directive !== undefined && !ignores.has(directive.kind) && !directive.description) {
            context.report({
              node: comment,
              messageId: 'missingDescription',
            })
          }
        }
      },
    }
  },
}

/**
 * Oxlint JS plugin using `eslintCompatPlugin` + `createOnce` for best Oxlint performance characteristics.
 * @see https://oxc.rs/docs/guide/usage/linter/writing-js-plugins.html
 */
const plugin = eslintCompatPlugin({
  meta: {
    name: '@josephmcg/plugin-comments',
  },
  rules: {
    'require-description': ruleRequireDescription,
  },
})

export default plugin
