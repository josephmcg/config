import { afterEach, describe, expect, it } from 'vitest'

import { isWebview } from '../src'

const setUserAgent = (value: string): void => {
  Object.defineProperty(navigator, 'userAgent', { configurable: true, value })
}

afterEach(() => {
  Object.defineProperty(navigator, 'userAgent', {
    configurable: true,
    value: navigator.userAgent,
  })
})

/**
 * These `userAgent` strings have been confirmed on the following devices
 */
describe(isWebview, () => {
  describe('real browsers — returns false', () => {
    it('returns false for iOS 26.3.1 Safari', () => {
      setUserAgent(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3 Mobile/15E148 Safari/604.1',
      )
      expect(isWebview(navigator.userAgent)).toBe(false)
    })

    it('returns false for MacOS 26.3.1 Chrome', () => {
      setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
      )
      expect(isWebview(navigator.userAgent)).toBe(false)
    })

    it('returns false for MacOS 26.3.1 Safari', () => {
      setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15',
      )
      expect(isWebview(navigator.userAgent)).toBe(false)
    })
  })

  describe('known in-app browsers — returns true', () => {
    it('returns true for LINE on iOS 26.3.1', () => {
      setUserAgent(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari Line/26.2.0',
      )
      expect(isWebview(navigator.userAgent)).toBe(true)
    })

    it('returns true for Instagram on iOS 26.3.1', () => {
      setUserAgent(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/23D8133 Instagram 419.0.0.27.74 (iPhone13,2; iOS 26_3_1; en_US; en; scale=3.00; 1170x2532; IABMV/1; 895010607) Safari/604.1',
      )
      expect(isWebview(navigator.userAgent)).toBe(true)
    })
  })
})
