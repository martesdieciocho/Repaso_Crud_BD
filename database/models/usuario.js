module.exports = function(sequelize, dataTypes){
    let alias = "Usuario"
    

    let cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncremente: true,
            primaryKey: true
        },
        nombre:{
            type: dataTypes.STRING
        },
        apellido:{
            type: dataTypes.STRING
        },
        cedula:{
            type: dataTypes.INTEGER
        },
        ciudad_id:{
            type: dataTypes.INTEGER
        },
        telefono:{
            type: dataTypes.INTEGER
        },
        correo:{
            type: dataTypes.STRING
        }
    }

    let config={
        tableName: "usuario",
        timestamps: false
    }
    let Usuario =sequelize.define(alias,cols,config)

    Usuario.associate = function(models){
        Usuario.belongsTo(models.Ciudad,{
            foreignKey:"ciudad_id"
            })
    }
    return Usuario
}