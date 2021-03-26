const {response}= require('express')

const usuariosGet=(req, res=response)=> {
    
  const {key,nombre= 'No name',dni} = req.query;
    res.json({
        msg: 'get API-controlador',
        key,
        nombre,
        dni
    });
  }

  const usuariosPut =  (req, res)=> {
    const id = req.params.id
    res.json({
        msg: 'put API-controller',
        id
    });
  }


 const  usuariosPost= (req, res)=> {

  const {nombre,edad} = req.body;
    res.json({
        msg: 'post API-controller',
        nombre,
        edad
    });
  }

  const usuariosDelete=  (req, res)=> {
    res.json({
        msg: 'delete API-controller'
    });
  }

  const usuariosPatch= (req, res)=> {
    res.json({
        msg: 'patch -controller'
    });
  }


module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch    
}