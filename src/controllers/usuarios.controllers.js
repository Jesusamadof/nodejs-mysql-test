import { response } from 'express'
import {pool} from '../db.js' 

export const getUsuarios = async(req, res)=>{ 
    try{
       
const [rows] = await pool.query('SELECT * FROM usuarios')
    res.json(rows)
    }catch(error){
        return res.status(500).json({
            message: 'Something goes wrong - Algo va mal'
        })
    }
}

export const getUsuario= async(req, res)=>{
  try {
    
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id =?', [req.params.id])
    console.log(rows)
    if (rows.length<=0)
         return res.status(404).json ({
         message:'usuarios not found'})

    
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

    }
}

export const postUsuarios = async(req, res)=>{
    const {nombre, pasword} = req.body  
    try {    
const [rows]= await pool.query('INSERT INTO usuarios(nombre,password) VALUES (?,?)', [nombre, pasword])
  res.send({
    id: rows.insertId,
    nombre,
    pasword
})
 } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

    
}
}


export const deleteUsuarios = async(req, res)=>{
try {
    const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?',[req.params.id]     )
console.log(result)

if (result.affectedRows <= 0) return res.status(404).json
({message: 'usuario no found'}) 

res.sendStatus(204)
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

}
}


//actualizar usuario

export const putUsuarios = async (req, res) => {
    
      const { id } = req.params;
      const { nombre, pasword } = req.body;
     
     try {
        const [result] = await pool.query(
            "UPDATE usuarios SET nombre = IFNULL(?, nombre), pasword = IFNULL(?, pasword) WHERE id = ?",
            [nombre, pasword, id]
          );
      
          if (result.affectedRows === 0)
            return res.status(404).json({ message: "usuarios not found" });
      
          const [rows] = await pool.query("SELECT * FROM usuario WHERE id = ?", [
            id,
          ]);
      
          res.json(rows[0]);
        } catch (error) {
          return res.status(500).json({ message: "Something goes wrong" });
        }

    }   
      
    
    
