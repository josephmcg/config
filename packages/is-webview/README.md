# is-webview &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/josephmcg/config/blob/main/LICENSE) ![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Fis-webview)

This is a tiny utility function that will determine if the provided `userAgent` string is coming from a webview within a native application.

## Installation

```bash
pnpm add @josephmcg/is-webview
```

## Usage

This is a pure function that can be used in any JavaScript environment.

```ts
import { isWebview } from '@josephmcg/is-webview'

if (isWebview(navigator.userAgent)) {
  console.log('This is a webview')
} else {
  console.log('This is not a webview')
}
```

## API

### isWebview(userAgent: string)
