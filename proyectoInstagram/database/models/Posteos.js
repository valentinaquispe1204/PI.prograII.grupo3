module.exports = function(sequelize, dataTypes) {
    let alias = "Posteos";  
    
    let cols = {  
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        
        },
        nombreImagen: {
            type: dataTypes.STRING(400)
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
        tableName : "posteos",
        timestamps: true,
        underscored: false,
    }
    
    
    const Posteos =  sequelize.define(alias,cols,config);
    }
    
    return  Posteos;
    
    /*FK usuarios*/ 