import type { Theme } from 'unocss/preset-mini'
import { toArray, type UserShortcuts } from 'unocss'
import { button } from './button'

export const shortcuts: UserShortcuts<Theme> = [
  ...toArray(button),
]
