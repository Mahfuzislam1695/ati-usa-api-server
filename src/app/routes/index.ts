import express from 'express';
import { careerRoutes } from '../modules/career/career.route';
import { ourServiceRoutes } from '../modules/service/ourService.route';
import { tecTalentsRoutes } from '../modules/technicalTalents/tecTalents.route';

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
  {
    path: '/tecTalents',
    route: tecTalentsRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
