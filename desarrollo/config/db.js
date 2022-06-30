const mysql = require('mysql')

    const connection = mysql.createConnection({
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_DATABASE,
    })

    connection.connect((error)=>{
        if(error){
            console.log('Error en la conexión con la DB['+error+']')
            return
        }
        console.log('Conexión exitosa con la DB')
    })

    module.exports = connection