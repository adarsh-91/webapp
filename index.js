const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.render('../public/index.html')
})

app.use(express.json());

app.post('/gates', (req, res) => {
    const { gateType, inputs } = req.body;

    switch (gateType) {
        case 'AND':
            const andOutput = inputs.every(input => input);
            res.json({ output: andOutput });
            break;
        case 'OR':
            const orOutput = inputs.some(input => input);
            res.json({ output: orOutput });
            break;
        case 'NOT':
            const notOutput = !inputs[0];
            res.json({ output: notOutput });
            break;
        default:
            res.status(400).json({ error: 'Invalid gate type' });
    }
});

const port = 3000;
app.listen(port, () => console.log(`API listening on port ${port}`));