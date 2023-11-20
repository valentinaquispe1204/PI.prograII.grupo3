module.exports = function(sequelize, dataTypes) {
let alias = "Users";  

let cols = {  
    idUsuario: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    
    },
    email: {
        type: dataTypes.STRING
    },

    arroba: {
        type: dataTypes.STRING
        
    },
   
    pass: {
        type: dataTypes.STRING(200)
    },
    fotoDePerfil: {
        type: dataTypes.STRING(400)
    },
    fecha: {
        type: dataTypes.DATE
    },
    dni: {
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
    tableName : "usuario",
    timestamps: true,
    underscored: false,
}


const Users =  sequelize.define(alias,cols,config);

/*RELACIONES */
Users.associate = function(models){
/*contra parte de la relación con los posteos */
    Users.hasMany(models.Posteos,{
        as: "posteosU",
        foreignKey: "idUsuario"
    })
/*contraparte de la relacion con los comentarios */
    Users.hasMany(models.Comentarios,{
        as: "comentariosU",
        foreignKey: "idUsuario"
    })
}

return  Users;
}
