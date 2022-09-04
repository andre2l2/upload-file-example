import { Router } from 'express';

const filesRoutes = Router().post('/file', (req, res) => {
  const body = req.body;
  console.log(body);

  res.json({ value: 'ok' }).status(201);
});

export { filesRoutes };
