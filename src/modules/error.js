const errorLog = (res, err) => {
    res.status(400).send(`<h1>Ocorreu um erro na requisição!</h1><p>${err.message}</p>`)
}

module.exports = errorLog;