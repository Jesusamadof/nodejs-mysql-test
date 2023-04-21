import {pool} from '../db.js' 

export const getJuegos = async(req, res)=>{ 
    try{
       
const [rows] = await pool.query('SELECT * FROM  juegos')
    res.json(rows)
    }catch(error){
        return res.status(500).json({
            message: 'Something goes wrong - Algo va mal'
        })
    }
}

export const getJuego= async(req, res)=>{
  try {
    
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM juegos WHERE id =?', [req.params.id])
    console.log(rows)
    if (rows.length<=0)
         return res.status(404).json ({
         message:'Juegos not found'})

    
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

    }
}

export const postJuegos = async(req, res)=>{
    const {titulo,genero,desarrollador,fecha_lanzamiento} = req.body  
    try {    
const [rows]= await pool.query('INSERT INTO juegos(titulo,genero,desarrollador,fecha_lanzamiento) VALUES (?,?,?,?)', [titulo,genero,desarrollador,fecha_lanzamiento])
  res.send({
    id: rows.insertId,
    titulo,genero,desarrollador,fecha_lanzamiento
})
 } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

    
}
}


export const deleteJuegos = async(req, res)=>{
try {
    const [result] = await pool.query('DELETE FROM juegos WHERE id = ?',[req.params.id]     )
console.log(result)

if (result.affectedRows <= 0) return res.status(404).json
({message: 'Juegos no found'}) 

res.sendStatus(204)
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong - Algo va mal'
  })

}
}


//actualizar usuario

export const putJuegos = async (req, res) => {
    
      const { id } = req.params;
      const { titulo,genero,desarrollador,fecha_lanzamiento } = req.body;
     
     try {
        const [result] = await pool.query(
            "UPDATE juegos SET titulo = IFNULL(?, titulo), genero = IFNULL(?, genero), desarrollador = IFNULL(?, desarrollador), fecha_lanzamiento = IFNULL(?, fecha_lanzamiento) WHERE id = ?",
            [titulo,genero,desarrollador,fecha_lanzamiento, id]
          );
      
          if (result.affectedRows === 0)
            return res.status(404).json({ message: "juegos not found" });
      
          const [rows] = await pool.query("SELECT * FROM juegos WHERE id = ?", [
            id,
          ]);
      
          res.json(rows[0]);
        } catch (error) {
          return res.status(500).json({ message: "Something goes wrong" });
        }

    }   
      
    
    
