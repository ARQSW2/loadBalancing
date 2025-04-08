import express from 'express';
import os from 'os';

const app = express();
const port = process.env.PORT || 3000;
const serverId = os.hostname(); // Obtiene el nombre del host

app.get('/hello', (req, res) => {
  res.send({
    message: 'Hello World!!',
    serverId: serverId,
  });
});

app.listen(port, () => {
  console.log(`Server ${serverId} listening at ${port}`);
});