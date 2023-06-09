import { useState, useEffect } from "react"

type QueryProp = string

export function useMediaQuery(section: QueryProp): boolean {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(section)
      const elementTop = element?.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop !== undefined && elementTop < windowHeight) {
        setIsVisible(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return isVisible
}
