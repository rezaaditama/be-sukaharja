import { Application, Router } from 'express';
import { BungaRouter } from './bunga';

const _routes: Array<[string, Router]> = [['/get-bunga', BungaRouter]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
