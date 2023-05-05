import { rest } from "msw";
import endpoints from "../utils/endpoints/endpoints";

const urlApi = "https://bikemeet.onrender.com";

export const handlers = [
  rest.post(
    `${urlApi}${endpoints.users}${endpoints.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "asdjfh3425kjlhsafkdh3k2h32" }))
  ),
];

export const errorHandlers = [
  rest.post(
    `${urlApi}${endpoints.users}${endpoints.login}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),
];
