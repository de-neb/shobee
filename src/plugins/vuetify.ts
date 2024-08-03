/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VSnackbarQueue } from "vuetify/labs/VSnackbarQueue";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";

const light: ThemeDefinition = {
    dark: false,
    colors: {
        background: "#F4F6F9", // Light grey-blue background for a clean and spacious look
        surface: "#F4F6F9", // White surface for cards and key elements
        primary: "#0056D2", // Strong blue for primary actions and highlights
        "primary-darken-1": "#0044A3", // Darker blue for hover states and active elements
        secondary: "#6D28D9", // Vibrant purple for secondary actions, adding a distinctive touch
        "secondary-darken-1": "#4B1D7C", // Darker purple for hover effects
        error: "#D32F2F", // Bold red for error messages, providing high visibility
        info: "#0288D1", // Bright blue for informational messages
        success: "#4CAF50", // Fresh green for success messages
        warning: "#FBC02D", // Warm yellow for warnings, ensuring clear visibility
        tertiary: "#B0BEC5", // Soft grey for less prominent elements and borders
        quaternary: "#E0E3E8", // Very light grey for subtle backgrounds and sections
        cream: "#FFF8E1", // Soft cream for highlights or special sections
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
    components: {
        VSnackbarQueue,
    },
});
