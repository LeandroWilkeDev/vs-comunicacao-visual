// Documentação do Sistema de Logo com Efeito de Scroll

/\*\*

- VISÃO GERAL
- O sistema foi redesenhado para mover a logomarca do Header para o Hero,
- com efeito de animação suave quando o usuário faz scroll.
-
- FLUXO DE FUNCIONAMENTO:
- 1.  A logomarca começa no Hero (grande e visível)
- 2.  Conforme o usuário rola, a logo encolhe e sua opacidade diminui
- 3.  Quando o scroll atinge o ponto de gatilho (TRIGGER_POINT), a logo
- aparece no Header com tamanho proporcional
- 4.  A logo permanece no Header enquanto o usuário continua rolando
-
- ARQUIVOS MODIFICADOS:
- - src/hooks/useScrollLogo.ts (NOVO): Hook customizado para rastrear scroll
- - src/components/landing/Hero.tsx: Agora mostra a logo no topo
- - src/components/landing/Header.tsx: Logo animada com efeito de scroll
-
- HOOK: useScrollLogo
- Retorna um objeto com:
- - scrollY: posição atual do scroll em pixels
- - isLogoInHeader: boolean indicando se deve mostrar logo no header
- - logoScale: escala da logo (0.3 a 1.0)
- - logoOpacity: opacidade da logo (0 a 1.0)
-
- Constantes importantes:
- - HERO_HEIGHT: 800px (altura aproximada do hero)
- - TRIGGER_POINT: 480px (altura \* 0.6)
-
- ANIMAÇÃO:
- Usa Framer Motion para animar:
- - scale: decresce enquanto rola até atingir 0.3
- - opacity: decresce até ficar invisível quando atinge TRIGGER_POINT
- - No Header, a logo aparece com opacidade total quando isLogoInHeader = true
    \*/
