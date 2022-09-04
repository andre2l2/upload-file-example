import { Router } from 'express';

const filesRoutes = Router().post('/file-save', (req, res) => {
  console.log(req.body);
  res.json({}).status(200);
});

export { filesRoutes };
