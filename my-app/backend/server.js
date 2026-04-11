const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let userSelections = [];

app.post('/save-pet', (req, res) => {
    const { userId, petId, petName } = req.body;

    const selection = { userId, petId, petName, timestamp: new Date() };
    userSelections.push(selection);

    console.log("Saved selection:", selection);
    res.status(200).json({ message: "Pet saved successfully!" });
});

app.listen(3000, () => console.log('Backend running on port 3000'));