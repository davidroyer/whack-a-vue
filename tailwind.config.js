module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  // purge: ['./**/*.vue'],

  theme: {
    extend: {
      fontFamily: {
        play: ['Play', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
        // sans: ['Lato', ...defaultTheme.fontFamily.sans] // Ensure fonts with spaces have " " surrounding it.
      }
    }
  },
  variants: {},
  plugins: [],
  experimental: 'all'
}
