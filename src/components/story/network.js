// import { Router } from "express";
// import * as Controller from "./controller";

// const storyRouter = Router();

// storyRouter.route("/").get(Controller.list);
// storyRouter.route("/").post(Controller.store);

// export default storyRouter;

import { Router } from "express";
import * as controller from "./controller";
// import { index, login } from "./controller.js";

const storyRouter = Router();

storyRouter.route("/").get(controller.index);
storyRouter.route("/store").post(controller.store);
storyRouter.route("/update/:id").put(controller.upsert);
storyRouter.route("/delete/:id").delete(controller.destroy);
// que variable exportamos aqui?
export default storyRouter;
