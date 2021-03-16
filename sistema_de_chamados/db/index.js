const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001

app.use(cors())
app.get('/chamados/:pagina', (req, res) => {

    const pagina = Number.parseInt(req.params.pagina) + 1;
    
  res.json({
    "totalChamados": 100,
    "conteudo": Array.apply(null, Array(100))
        .map((_, idx) => (idx))
        .filter((d) => d >= 5 * (pagina - 1) && d < 5 * pagina)
        .map(d => (
            {"id": d, "descricao": "Chamado "+ d, "status": "pendente"}
        ))
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
