/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";

const light: ThemeDefinition = {
    dark: false,
    colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        primary: "#2B2E4A",
        "primary-darken-1": "#192039",
        secondary: "#E84545",
        "secondary-darken-1": "#018786",
        error: "#9d422c",
        info: "#5881a6",
        success: "#83b18f",
        warning: "#c8a028",
        tertiary: "#9e9fa1",
        quartenary: "#E5E1DA",
        cream: "#ececeb",
    },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        defaultTheme: "light",
        themes: {
            light,
        },
    },
});
