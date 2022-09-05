import { Router } from 'express';

const filesRoutes = Router().post('/file', (req, res) => {
  const body = req.body;

  console.log(body.buffer.toString('base64'));

  // fs.writeFileSync(`test.png`, body.buffer);

  res.json({ value: 'ok' }).status(200);
});

export { filesRoutes };
