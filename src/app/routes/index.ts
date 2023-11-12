import express from 'express';
import { careerRoutes } from '../modules/career/career.route';
import { ourServiceRoutes } from '../modules/service/ourService.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/our-service',
    route: ourServiceRoutes,
  },
  {
    path: '/career',
    route: careerRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
