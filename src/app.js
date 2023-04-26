import express from 'express'
import usuariosRoutes from './routes/usuarios.routes.js'
import indexRoutes from './routes/index.routes.js'
import juegosRoutes from './routes/juegos.routes.js'
import plataformasRoutes from './routes/plataformas.routes.js'
import ventasRoutes from './routes/ventas.routes.js'



const app = express()

app.use(express.json())

   app.use(indexRoutes)
   app.use('/api', usuariosRoutes)
   app.use('/api', juegosRoutes)
   app.use('/api', plataformasRoutes)
   app.use('/api', ventasRoutes)



   app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*'); // Permite todas las solicitudes de cualquier origen
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos HTTP permitidos
      res.header('Access-Control-Allow-Headers', 'Content-Type'); // Cabeceras permitidas
      next();
    });
 

   app.use((req, res, next)=>{
      res.status(404).json({
         message: 'endpoint Not found'
      }) 
   })
   export default app;