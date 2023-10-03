const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('portfolio/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio/build', 'index.html'));
  });

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));