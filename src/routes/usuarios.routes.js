import {Router} from 'express'
import {getUsuarios,getUsuario,postUsuarios,putUsuarios,deleteUsuarios,} from '../controllers/usuarios.controllers.js'

const router =Router()
  
  router.get('/usuarios', getUsuarios)
    
  router.get('/usuarios/:id', getUsuario)

  router.post('/usuarios', postUsuarios)
  
  router.patch('/usuarios/:id', putUsuarios)
  
  router.delete('/usuarios/:id', deleteUsuarios)


export default router