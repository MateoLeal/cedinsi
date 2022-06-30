const httpError = (res, err) => {
    console.log(err)
    res.status(500)
    res.send({ error: err.sqlMessage, codigo:err.code })
}

module.exports = { httpError }