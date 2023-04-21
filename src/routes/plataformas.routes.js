import {Router} from 'express'
import {getPlataformas,getPlataforma,postPlataformas,putPlataformas,deletePlataformas} from '../controllers/plataformas.controllers.js'

const router =Router()
  
  router.get('/plataformas', getPlataformas)
    
  router.get('/plataformas/:id', getPlataforma)

  router.post('/plataformas', postPlataformas)
  
  router.patch('/plataformas/:id', putPlataformas)
  
  router.delete('/plataformas/:id', deletePlataformas)


export default router