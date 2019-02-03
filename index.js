import 'dotenv/config';
import express from 'express';

let app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
	process.stdout.write(`Server up and running in port: ${port}`);
});

// const port = normalizePort(process.env.PORT || '3000');