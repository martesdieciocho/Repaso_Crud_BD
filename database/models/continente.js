module.exports = function(sequelize, dataTypes){
    let alias = "Continente"
    

    let cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncremente: true,
            primaryKey: true
        },
        nombre:{
            type: dataTypes.STRING
        }
    }

    let config={
        tableName: "continente",
        timestamps: false
    }
    let Continente =sequelize.define(alias,cols,config)

    Continente.associate = function(models){
        Continente.hasMany(models.Ciudad,{
            foreignKey:"ciudad_id"
            })
    }
    return Continente
}