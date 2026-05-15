// Hook para rastrear o scroll e controlar a animação da logo
import { useState, useEffect } from 'react'

interface ScrollLogoState {
  scrollY: number
  isLogoInHeader: boolean
  logoScale: number // 0 a 1
  logoOpacity: number // 0 a 1
}

const HERO_HEIGHT = 800 // Altura aproximada do hero
const TRIGGER_POINT = HERO_HEIGHT * 0.6 // Quando a logo começa a sair do hero

export const useScrollLogo = (): ScrollLogoState => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Logo fica no header quando scroll > TRIGGER_POINT
  const isLogoInHeader = scrollY > TRIGGER_POINT

  // Calcula a escala da logo (1 = tamanho completo, 0.3 = tamanho do header)
  const logoScale = Math.max(0.3, 1 - (scrollY / TRIGGER_POINT) * 0.7)

  // Calcula a opacidade (começa a ficar invisível antes de entrar no header)
  const logoOpacity = Math.max(0, 1 - (scrollY / TRIGGER_POINT) * 1.2)

  return {
    scrollY,
    isLogoInHeader,
    logoScale,
    logoOpacity,
  }
}
