# Shobee

A responsive e-commerce frontend built with Vue 3 and TypeScript. The project demonstrates component-based UI development, client-side routing, state management, REST API integration, and responsive behavior across desktop and mobile layouts.

## Live Demo

https://de-neb.github.io/shobee/

## Highlights

- Browse products and categories from a third-party REST API
- View product details and navigate between pages with Vue Router
- Add and remove products from a shopping cart with reactive state updates
- Manage shared application state with Pinia
- Responsive layouts for desktop and mobile
- Error and edge-case handling for changing external API data

## Tech Stack

- Vue 3
- TypeScript
- Pinia
- Vue Router
- Vuetify 3
- Axios
- Vite
- Sass

## Running Locally

```bash
git clone https://github.com/de-neb/shobee.git
cd shobee
npm install
npm run dev
```

## Build

```bash
npm run build
```

The application uses the Platzi Fake API for product and category data. Because the API is externally maintained, its available records may change over time.
