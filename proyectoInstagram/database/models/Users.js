module.exports = function(sequelize, dataTypes) {
let alias = "Users";  

let cols = {  
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    
    },
    mail: {
        type: dataTypes.STRING(400)
    },

    arroba: {
        type: dataTypes.STRING
        
    },
   
    pass: {
        type: dataTypes.STRING(45)
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
    tableName : "users",
    timestamps: true,
    underscored: false,
}


const Users =  sequelize.define(alias,cols,config);
}

return  Users;
