/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    content: [
      "./node_modules/flowbite-react/lib/**/*.js",
      "./pages/**/*.{ts,tsx}",
      "./public/**/*.html",
    ],
    plugins: [
      require("flowbite/plugin"),
      require('flowbite-typography'),
    ],
    theme: {},
  };