//layout import
import { HeaderOnly } from "~/components/Layout";


//pages import
import Home from "~/pages/Home";
import Phone from "~/pages/Phone";
import ShoppingCart from "~/pages/ShoppingCart";
import Profile from "~/pages/Profile";
import Admin from "~/pages/Admin";

const publicRoutes = [
    { path: "/", component: Home, Layout: HeaderOnly},
    { path: "/Home", component: Home, Layout: HeaderOnly},
    { path: "/Phone", component: Phone, Layout: HeaderOnly},
    { path: "/ShoppingCart", component: ShoppingCart },
    { path: "/Profile", component: Profile, Layout: HeaderOnly},
    { path: "/Admin", component: Admin, Layout:  null},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };