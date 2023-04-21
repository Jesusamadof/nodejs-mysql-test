import {Router} from 'express'
import {} from '../controllers/ventas.controllers.js'
import { deleteVentas, getVenta, getVentas, postVentas, putVentas } from '../controllers/ventas.controllers.js'

const router =Router()
  
  router.get('/ventas', getVentas)

  router.get('/ventas/:id', getVenta)

  router.post('/ventas', postVentas)
  
  router.patch('/ventas/:id', putVentas)
  
  router.delete('/ventas/:id', deleteVentas)


export default router