import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

export const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{teal.50}',
      100: '{teal.100}',
      200: '{teal.200}',
      300: '{teal.300}',
      400: '{teal.400}',
      500: '{teal.500}',
      600: '{teal.600}',
      700: '{teal.700}',
      800: '{teal.800}',
      900: '{teal.900}',
      950: '{teal.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{teal.600}',
          inverseColor: '#ffffff',
          hoverColor: '{teal.800}',
          activeColor: '{teal.900}',
        },
        highlight: {
          background: '{teal.950}',
          focusBackground: '{teal.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: '{teal.50}',
          inverseColor: '{teal.950}',
          hoverColor: '{teal.100}',
          activeColor: '{teal.200}',
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
      },
    },
  },
});
