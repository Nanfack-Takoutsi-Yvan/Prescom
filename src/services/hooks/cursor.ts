/* eslint-disable no-new */
import { useEffect } from 'react'

interface CursorElements {
  link: HTMLLinkElement
  script: HTMLScriptElement
}

declare const kursor: any

const useCursor = () => {
  const createStyleLink = (): HTMLLinkElement => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = process.env.KURSOR_STYLE_URL || ''
    return link
  }

  const createScriptElement = (): HTMLScriptElement => {
    const script = document.createElement('script')
    script.src = process.env.KURSOR_SCRIPT_SRC || ''
    script.async = true
    script.onload = () => {
      const Kursor = kursor // Assuming kursor is globally available
      new Kursor({
        type: 4,
        color: '#129e03'
      })
    }

    return script
  }

  const createCursor = (): CursorElements => {
    const link = createStyleLink()
    const script = createScriptElement()
    return { link, script }
  }

  useEffect(() => {
    const { link, script } = createCursor()
    document.head.appendChild(link)
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(link)
      document.body.removeChild(script)
    }
  }, [])
}

export default useCursor
