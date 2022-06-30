const {httpError} = require('../helpers/handleError')
const connection = require('../../config/db')

const getItems = (req, res, next) =>{
    try {
        connection.query("SELECT * FROM libro", (error, results)=>{
            if(error){
                httpError(res, error)
            } else {
                res.send(results)
                return next()
            }
        })
    } catch (e) {
        httpError(res, e)
    }
}

const createItems = async (req, res, next) =>{

    const nombre_libro = req.body.nombre_libro
    const autor = req.body.autor
    const precio = req.body.precio
    try {
        connection.query("INSERT INTO libro SET ?", {nombre_libro:nombre_libro, autor:autor, precio:precio}, (error, results)=>{
            if(error){
                httpError(res, error)
            } else {
                res.send(`El libro ${nombre_libro}, con auto ${autor} a un precio de ${precio} se a creado exitosamente`)
                return next()
            }
        })
    } catch (e) {
        httpError(res, e)
    } 
}

const updateItems = (req, res, next) =>{

    const nombre_libro = req.body.nombre_libro
    const autor = req.body.autor
    const precio = req.body.precio
    const id = req.body.id

    try {
        connection.query(`UPDATE libro SET nombre_libro = '${nombre_libro}', autor = '${autor}', precio = ${precio} WHERE id = ${id}`, (error, results)=>{
            if(error){
                httpError(res, error)
            } else {
                res.send(`El libro ${nombre_libro}, con auto ${autor} a un precio de ${precio} se a actualizado exitosamente`)
                return next()
            }
        })
    } catch (e) {
        httpError(res, e)
    } 
    
}

const deleteItems = (req, res, next) =>{
    const id = req.body.id
    try {
        connection.query("DELETE FROM libro WHERE ?", {id:id}, (error, results)=>{
            if(error){
                httpError(res, error)
            } else {
                res.send(`El libro con id ${id} se a eliminado exitosamente`)
                return next()
            }
        })
    } catch (e) {
        httpError(res, e)
    } 
}

module.exports = {getItems, createItems, updateItems, deleteItems}