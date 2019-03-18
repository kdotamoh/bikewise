const breakpoints = [720, 480]

export const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)