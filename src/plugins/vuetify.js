import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const theme = {
  primary: colors.deepOrange.lighten2,
  secondary: colors.deepPurple.darken1,
};

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: "xs",
  },
  theme: {
    themes: {
      light: theme,
      dark: theme,
    },
  },
});
