import express from 'express'
const app = express();
import {dirname, join} from 'path' ///dirmen me permite crear una ruta absoluta
//join nos ayuda con el tema de la / \ para diferentes sistemas operativos
import { fileURLToPath } from 'url';// const {fileURLToPath} = require('url')
import indexRoutes from './rutas.js'
const __dirname = dirname(fileURLToPath(import.meta.url)) //nos devuelve la ruta absoluta

app.set('view engine', 'ejs') // establece una nueva configuracion, view engine es un motor de vista, nos permite extender el html
app.set('views', join(__dirname, 'views')) //para decirle donde esta dicha carpeta, pasando la ruta absoluta
//con el join concatenamos la ruta con la carpeta views
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'publico')))
app.listen(3000)
console.log('server escuchando en: ', 3000)

//npx nodemon back/index.js