## Available Scripts

cmd - создаем в папке файл package.json :

### `npm init`

устанавливаем пакеты babel :

### `npm install --save-dev @babel/core @babel/cli`

установка пресета :

### `npm install --save-dev @babel/preset-env`
### `npm install --save-dev @babel/preset-react`

установка плагина :

### `npm install --save-dev @babel/plugin-proposal-class-properties`

полифилы :
### `npm install core-js`

react :
### `npm install react react-dom`

запуск babel для преобразования :

### `npx babel src --out-dir build`

список всех плагинов :
https://babeljs.io/docs/en/plugins

WEBPACK
установка webpack :
### `npm install --save-dev webpack webpack-cli`
установка пакета loader :
### `npm install --save-dev file-loader`
### `npm install --save-dev babel-loader`
### `npm install --save-dev css-loader`
### `npm install --save-dev style-loader`
### `npm install --save-dev node-sass sass-loader`
установка плагинов :
### `npm install --save-dev html-webpack-plugin`
### `npm install --save-dev mini-css-extract-plugin`
утилита:
### `npm install --save-dev webpack-dev-server`
запустить webpack :
### `npm start`
сборка webpack :
### `npm run build`

список loader:
https://webpack.js.org/loaders/

<!-- собрать webpack :
### `npx webpack` (по умолчанию production сборка)
### `npx webpack --mode development` (development режим) -->

