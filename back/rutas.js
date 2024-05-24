import {Router} from 'express'
const router = Router()


router.get('/', (req, res)=>{
    res.render('index.ejs', {title: 'Sobre mi'})
})

router.get('/Proyectos', (req, res)=>{
    res.render('proyectos.ejs', {title: 'Proyectos'})
})
router.get('/Conocimientos', (req, res)=>{
    res.render('conocimientos.ejs', {title: 'Conocimientos'})
})

router.get('/Contacto', (req, res)=>{
    res.render('contacto.ejs', {title: 'Contacto'})
})


export default router