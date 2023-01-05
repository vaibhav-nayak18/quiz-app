/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#28313B",
                secondary: "#485461",
                third: "#2D3436",
                fourth: "#0D324D",
            },
            animation: {
                pop: ".5s linear pop",
            },
            keyframes: {
                pop: {
                    "0%": { transform: "scale(.3)" },
                    "30%": { transform: "scale(.7)" },
                    "60%": { transform: "scale(1)" },
                    "90%": { transform: "scale(1.05)" },
                    "100%": { transform: "scale(1)" },
                },
            },
        },
    },
    plugins: [],
};
