import { response } from 'express'
import {pool} from '../db.js' 

export const getPlataformas = async(req, res)=>{ 
    try{
       
const [rows] = await pool.query('SELECT * FROM plataformas')
    res.json(rows)
    }catch(error){
        return res.status(500).json({
            message: 'Something goes wrong - Algo va mal'
        })
    }
}

export const getPlataforma= async(req, res)=>{
  try {
    
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM plataformas WHERE id =?', [req.params.id])
    console.log(rows)
    if (rows.length<=0)
         return res.status(404).json ({
         message:'Plataformas not found'})

    
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

    }
}

export const postPlataformas = async(req, res)=>{
    const {nombre,descripcion} = req.body  
    try {    
const [rows]= await pool.query('INSERT INTO Plataformas(nombre,descripcion) VALUES (?,?)', [nombre,descripcion])
  res.send({
    id: rows.insertId,
    nombre,
    descripcion
})
 } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

    
}
}


export const deletePlataformas = async(req, res)=>{
try {
    const [result] = await pool.query('DELETE FROM platafromas WHERE id = ?',[req.params.id]     )
console.log(result)

if (result.affectedRows <= 0) return res.status(404).json
({message: 'Plataformas no found'}) 

res.sendStatus(204)
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

}
}


//actualizar platafroma

export const putPlataformas = async (req, res) => {
    
      const { id } = req.params;
      const { nombre,descripcion } = req.body;
     
     try {
        const [result] = await pool.query(
            "UPDATE usuarios SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion) WHERE id = ?",
            [nombre, descripcion, id]
          );
      
          if (result.affectedRows === 0)
            return res.status(404).json({ message: "Plataformas not found" });
      
          const [rows] = await pool.query("SELECT * FROM plataformas WHERE id = ?", [
            id,
          ]);
      
          res.json(rows[0]);
        } catch (error) {
          return res.status(500).json({ message: "Something goes wrong" });
        }

    }   
      
    
    
