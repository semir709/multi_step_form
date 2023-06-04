/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "ligh-gray": "hsl(229, 24%, 87%)",
        "custom-magnolia": "hsl(217, 100%, 97%)",
        "custom-alabaster": "hsl(231, 100%, 99%)",
        "custom-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
