const express = require('express');
const app = express();

app.use(express.static('./'));
app.listen(80, () => console.info('application started on http://%s:%d', 'localhost', '80'));
