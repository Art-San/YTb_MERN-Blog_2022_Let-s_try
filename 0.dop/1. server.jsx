
1.
// npm init -y // -y без вопросов получаем package.json

2. 
npm i express mongoose cors bcryptjs dotenv jsonwebtoken chalk@4.1.2

express  - //для разработки БЭКЕНДА
mongoose - //для связи с БД
cors     - ///чтоб наш БЕКЭНД разрешал запросы сразных адресов
bcryptjs - //шифрование пароля
Dotenv //анализирует файлы . env , чтобы сделать переменные окружения, 
//хранящиеся в них, доступными через getenv() , $_ENV или $_SERVER .
jsonwebtoken - для регистрации получение токена
=============
"chalk@4.1.2" - эту версию надо ставить
==============
3. npm i nodemon -D (-D модули, которые вы используете на этапе разработки вашего проекта)

nodemon - // автомотически перезапускае сервер
отслеживает изменения бэкенда в реальном времени

4. в package.json добавили "type": "module",

5. Express-fileupload экспресс-загрузка файлов
npm i express-fileupload