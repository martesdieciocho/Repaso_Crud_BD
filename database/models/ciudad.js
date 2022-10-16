module.exports = function(sequelize, dataTypes){
    let alias = "Ciudad"
    

    let cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncremente: true,
            primaryKey: true
        },
        nombre:{
            type: dataTypes.STRING
        },
        poblacion:{
            type: dataTypes.INTEGER
        },
        continente_id:{
            type: dataTypes.INTEGER
        }
    }

    let config={
        tableName: "ciudad",
        timestamps: false
    }
    let Ciudad =sequelize.define(alias,cols,config)

    Ciudad.associate = function(models){
        Ciudad.hasMany(models.Usuario,{
            foreignKey:"ciudad_id"
            })

    Ciudad.associate= function(models){
        Ciudad.belongsTo(models.Continente,{
            foreignKey:"continente_id"
        })
    }
    }
    return Ciudad
}