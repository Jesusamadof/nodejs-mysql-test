import {Router} from 'express'
import { getJuego, getJuegos, postJuegos, putJuegos, deleteJuegos } from '../controllers/juegos.controllers.js'

const router = Router()
  
  router.get('/juegos', getJuegos)
    
  router.get('/juegos/:id', getJuego)

  router.post('/juegos', postJuegos)
  
  router.patch('/juegos/:id', putJuegos)
  
  router.delete('/juegos/:id', deleteJuegos)


export default router