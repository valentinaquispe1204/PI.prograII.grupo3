module.exports = function(sequelize, dataTypes) {
    let alias = "Comentarios";  
    
    let cols = {  
        idComentario: { /**preguntar si falta agregar idComentario o dejar asi */
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        
        },
        textoComentario: {
            type: dataTypes.STRING(400)
        },
        idPosteo:{
            type: dataTypes.INTEGER
        },
        idUsuario:{
            type: dataTypes.INTEGER
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
        tableName : "comentario",
        timestamps: true,
        underscored: false,
    }
    
    
    const Comentarios =  sequelize.define(alias,cols,config);
   
    
      /*RELACIONES */
      Comentarios.associate = function(models){
        /*contraparte de la relacion posteo con los comentarios */
        Comentarios.belongsTo(models.Posteos, {
            as: "posteosC",
            foreignKey: "idComentario",
        })
        /*relacionamos usuarios con comentarios */
        Comentarios.belongsTo(models.Users, {
            as: "usersC",
            foreignKey: "idUsuario",
        })
        
    
    }
    return  Comentarios;
}
    
    
    