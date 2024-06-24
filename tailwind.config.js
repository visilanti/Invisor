/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          pr00: "#0C0C0E",
          pr01: "#161519",
          pr02: "#1D1D21",
          pr03: "#A19171",
          pr04: "#A19171",
          pr05: "#3F3E47",
          pr06: "#504E5A",
        },
        secondary: {
          sc00: "#E22209",
          sc01: "#F62509",
          sc02: "#F6371D",
          sc03: "#F85C47",
          sc04: "#F96F5D",
          sc05: "#FA8575",
          sc06: "#FB9789",
        },
        varians: {
          vr00: "#AEBFD5",
          vr01: "#BFCCDE",
          vr02: "#CDD7E5",
          vr03: "#EADBC8",
          vr04: "#EEF2F6",
          vr05: "#F5F5F5",
          vr06: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
