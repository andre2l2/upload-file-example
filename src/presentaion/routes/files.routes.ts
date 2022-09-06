import { Router } from 'express';
import { saveFile } from '../../domain/usecase/files.usecase';

const filesRoutes = Router().post('/file', (req, res) => {
  const body = req.body;
  const file = body.image;
  saveFile(file);

  res.json({ value: 'ok' }).status(200);
});

export { filesRoutes };
