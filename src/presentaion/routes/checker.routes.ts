import { Router } from 'express';
import { author, version } from '../../../package.json';

const checkerRoutes = Router().get('/', (req, res) => {
  res.json({ version, author });
});

export { checkerRoutes };
