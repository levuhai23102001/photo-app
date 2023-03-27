import Home from "../pages/Home";
import AddPage from "../pages/AddEdit/AddPage";
import EditPage from "../pages/AddEdit/EditPage";
import config from "../configs";

const myRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.add, component: AddPage },
  { path: config.routes.edit, component: EditPage },
];

export { myRoutes };
