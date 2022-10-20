let db = require('../database/models')

let usuariosController= {
    listar: function(req,res){

        db.Usuario.findAll()

        .then(function(usuarioRes){
            return res.render("listarUsuarios", {usuarioRes:usuarioRes})
        })
    },
    agregar: function(req,res){
       return res.render("agregarUsuario")
    },
    añadir: function(req,res){
        let usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            cedula: req.body.cedula,
            ciudad_id: req.body.ciudad_id,
            telefono: req.body.telefono,
            correo: req.body.correo
        }

        db.Usuario.create(usuario)
        .then(function(){

            return  res.redirect("/usuarios/listado")
        })

      .catch(err => console.error(err));
     },

     actualizar: function(req, res){
        let usuario ={
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            cedula: req.body.cedula,
            ciudad_id: req.body.ciudad_id,
            telefono: req.body.telefono,
            correo: req.body.correo
        }
       db.Usuario.update(usuario, {where: {id:req.params.id}})
        .then(function(){
            res.redirect("/usuarios/listado")
        })
        .catch(err => console.error(err));
        
     },

     editar: function(req,res){
        db.Usuario.findByPk(req.params.id)
        .then(usuario =>{
            res.render('editarUsuario', {usuario})
        })
     },

     eliminar: function(req,res){
        db.Usuario.findByPk(req.params.id)
        .then(usuario =>{
            res.render('eliminarUsuario', {usuario})
        })
     },

     borrar: function(req, res){
        db.Usuario.destroy({where:{id:req.params.id}})
        .then(function(){
            res.redirect("/usuarios/listado")
        })
        .catch(err => console.error(err));
     }

     
}

module.exports = usuariosController;