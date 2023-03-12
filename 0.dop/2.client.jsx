1. npx create-react-app .
2. Удалили все лишние
3. Подключили шрифт гугл //https://fonts.google.com/specimen/Poppins?query=poppin
  1. Одну часть в indexedDB.html
{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link> */}
 2. Другую часть в index.css
//  font-family: 'Poppins', sans-serif;

4. tailwindcss Для РЕАКТА своя установка

https://tailwindcss.com/docs/guides/create-react-app

1
// npx create-react-app my-project
// cd my-project

2
npm install -D tailwindcss
npx tailwindcss init

3
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }

4. в ./src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

5.
npm run start

6.
export default function App() {
    return (
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    )
  }
-------------------------------------------------------------------

7. Reduxjs/toolkit

После того как сделали роуты,  страницу регистрации и аторизации
ставим 

npm install @reduxjs/toolkit
npm install react-redux

8. axios для запросов

npm install axios

9. toastify для уведомлений
npm i react-toastify