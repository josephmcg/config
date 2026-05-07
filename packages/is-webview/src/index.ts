/**
 * Detects whether the page is running inside a native app's webview.
 *
 * Three complementary heuristics are combined:
 *
 * 1. Known in-app browser userAgent tokens (LINE, Instagram, etc.)
 * 2. Generic iOS WebView: iPhone/iPad userAgent without the `Safari/` token.
 *    WKWebView (used by all modern iOS app webviews) omits it; mobile Safari
 *    always includes it. Known standalone browsers (CriOS, FxiOS, EdgiOS) are
 *    excluded so they don't get a false positive.
 * 3. Generic Android WebView: Android userAgent containing `wv`, which Google's
 *    WebView appends automatically.
 *
 * @example
 * import { isWebview } from '@josephmcg/is-webview'
 *
 * if (isWebview(navigator.userAgent)) {
 *   console.log('This is a webview')
 * } else {
 *   console.log('This is not a webview')
 * }
 */
export const isWebview = (userAgent: string): boolean => {
  const isKnownInAppBrowser =
    /Line\/|FBAN|FBAV|Instagram|MicroMessenger|TikTok|Snapchat|Twitter/u.test(userAgent)

  const isIos = /iPhone|iPad/u.test(userAgent)
  const isStandaloneBrowser = /CriOS|FxiOS|EdgiOS/u.test(userAgent)
  const isIosWebView = isIos && !isStandaloneBrowser && !userAgent.includes('Safari/')

  const isAndroidWebView = userAgent.includes('Android') && userAgent.includes('; wv)')

  return isKnownInAppBrowser || isIosWebView || isAndroidWebView
}
