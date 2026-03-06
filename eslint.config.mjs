import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'app',
    vue: true,
    typescript: true,
    stylistic: {
      quotes: 'single',
      semi: false,
    },
    ignores: [
      'dist/**',
      'node_modules/**',
      'src/auto-imports.d.ts',
      'src/components.d.ts',
    ],
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
)
