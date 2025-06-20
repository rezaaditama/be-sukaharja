import { Application, Router } from 'express';
import { BungaRouter } from './bunga.route';

const _routes: Array<[string, Router]> = [['/bunga', BungaRouter]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
