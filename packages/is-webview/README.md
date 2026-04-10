# @josephmcg/is-webview &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/josephmcg/config/blob/main/LICENSE) [![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Fis-webview)](https://www.npmjs.com/package/@josephmcg/is-webview)

A tiny utility function that will determine if the provided `userAgent` string is coming from a webview within a native application.

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

## Why?

In-app browsers like LINE and Instagram change the viewport height as you scroll. Their bottom toolbar comes in and out of view, which causes `*vh`-based layouts to jump or break.

I was debugging this behavior and needed a simple way to detect when my app was running inside a webview or in-app browser, so I could apply different styles.
