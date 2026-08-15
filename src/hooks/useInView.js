import { useEffect, useState } from 'react'

const OPCIONES = { threshold: 0.1 }

export default function useInView(ref) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(el)
      }
    }, OPCIONES)

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, inView])

  return inView
}
