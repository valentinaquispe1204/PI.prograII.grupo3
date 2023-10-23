module.exports = function(sequelize, dataTypes) {
    let alias = "Posteos";  
    
    let cols = {  
        idPosteo: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        
        },
        nombreImagen: {
            type: dataTypes.STRING
        },
    
        piePost: {
            type: dataTypes.STRING
               
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
    
        deletedAt: {
            type: dataTypes.DATE
        },
    
    }
    
    let config = {  
        tableName : "posteo",
        timestamps: true,
        underscored: false,
    }
    
    
    const Posteos =  sequelize.define(alias,cols,config);
    
    /*RELACIONES */
    Posteos.associate = function(models){
        /*relacionamos posteo con el usuario */
        Posteos.belongsTo(models.Users,{
            as: "usersP",
            foreignKey: "idPosteo"
        })
        /*relacionamos posteo con los comentarios */
        Posteos.hasMany(models.Comentarios, {
            as: "comentariosP",
            foreignKey: "idPosteo",
        })
    }


    return  Posteos;
}
    
    