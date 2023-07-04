import { createVuetify, ThemeDefinition } from 'vuetify';

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

const scrollBarWidth = 16;

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'light',
      themes: {
        light,
      },
    },
    display: {
      mobileBreakpoint: 'sm',
      thresholds: {
        xs: 320,
        sm: 520,
        md: 760 + scrollBarWidth,
        lg: 960 + scrollBarWidth,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
