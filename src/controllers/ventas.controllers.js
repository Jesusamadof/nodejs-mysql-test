
import {pool} from '../db.js' 

export const getVentas = async(req, res)=>{ 
    try{
       
const [rows] = await pool.query('SELECT * FROM ventas')
    res.json(rows)
    }catch(error){
        return res.status(500).json({
            message: 'Something goes wrong - Algo va mal'
        })
    }
}


export const getVenta= async(req, res)=>{
  try {
    
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM ventas WHERE id =?', [req.params.id])
    console.log(rows)
    if (rows.length<=0)
         return res.status(404).json ({
         message:'ventas not found'})

    
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

    }
}

export const postVentas = async(req, res)=>{
    const {id_usuario,id_juego,fecha_compra} = req.body  
    try {    
const [rows]= await pool.query('INSERT INTO ventas(id_usuario,id_juego,fecha_compra) VALUES (?,?,?)', [id_usuario,id_juego,fecha_compra])
  res.send({
    id: rows.insertId,
    id_usuario,id_juego,fecha_compra
})
 } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

    
}
}


export const deleteVentas = async(req, res)=>{
try {
    const [result] = await pool.query('DELETE FROM platafromas WHERE id = ?',[req.params.id]     )
console.log(result)

if (result.affectedRows <= 0) return res.status(404).json
({message: 'Ventas no found'}) 

res.sendStatus(204)
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

}
}


//actualizar platafroma

export const putVentas = async (req, res) => {
    
      const { id } = req.params;
      const { id_usuario,id_juego,fecha_compra } = req.body;
     
     try {
        const [result] = await pool.query(
            "UPDATE ventas SET id_usuarios = IFNULL(?, id_usuarios), id_juego = IFNULL(?, id_juego), fecha_compra = IFNULL(?, fecha_compra) WHERE id = ?",
            [id_usuario,id_juego,fecha_compra, id]
          );
      
          if (result.affectedRows === 0)
            return res.status(404).json({ message: "Ventas not found" });
      
          const [rows] = await pool.query("SELECT * FROM ventas WHERE id = ?", [
            id,
          ]);
      
          res.json(rows[0]);
        } catch (error) {
          return res.status(500).json({ message: "Something goes wrong" });
        }

    }   
      
    
    
