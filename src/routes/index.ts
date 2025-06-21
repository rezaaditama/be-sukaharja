import { Application, Router } from 'express';
import { BungaRouter } from './bunga.route';
import { PengaduanRouter } from './pengaduan.route';
import { PetaniRouter } from './petani.route';
import { UserRouter } from './user.route';

const _routes: Array<[string, Router]> = [
  ['/bunga', BungaRouter],
  ['/petani', PetaniRouter],
  ['/pengaduan', PengaduanRouter],
  ['/user', UserRouter],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(`/api${url}`, router);
  });
};
