module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
         // 1: "#FFEDD3",
          // 2: "#FCD2D1"
          1: "#ebe8ec",
          2: "#b0a3a4",
          3: "transparent"
        },
        fg: {
          1: "#857173",
          2: "#362e2f",
          3: "transparent"
        }
      },
      fontFamily: {
        dmMono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
