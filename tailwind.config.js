/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-rating-container-color": "#1F252F",
        "button-bg-color": " #272E38",
        "feedback-text-color": "#818793",
        "submit-btn-color": "#FB7616",
      },
      height: {
        "custom-container-height": "22rem",
      },
    },
  },
  plugins: [],
};
