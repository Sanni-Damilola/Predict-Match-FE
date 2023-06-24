/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgi: 'url("./src/assets/images/3.jpg")',
        bgresult: 'url("./src/assets/images/images.jpg")',
        UpcomingHero: 'url("./src/assets/fb-upcoming.jpg")',
        matchtableBG: 'url("./src/assets/match-bg.jpg")',
        awardsBG: 'url("./src/assets/undraw_goal_-0-v5v.svg")',
        signupBG: 'url("./src/assets/signup.jpg")',
      },
    },
  },
  plugins: [],
};
