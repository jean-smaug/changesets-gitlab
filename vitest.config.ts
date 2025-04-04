import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      include: ['src'],
      provider: 'istanbul',
      reporter: ['lcov', 'json', 'text'],
    },
    globals: true,
  },
})
