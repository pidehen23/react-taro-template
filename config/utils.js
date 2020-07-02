import { join } from 'path'

export function resolve (dir) {
  return join(__dirname, '..', dir)
}
