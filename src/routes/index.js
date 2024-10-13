//layout import
import { HeaderOnly } from "~/components/Layout";


//pages import
import Home from "~/pages/Home";
import Phone from "~/pages/Phone";
import ShoppingCart from "~/pages/ShoppingCart";
import Profile from "~/pages/Profile";
import Admin from "~/pages/Admin";
import AboutUs from "~/pages/AboutUs";
import Login from "~/pages/Login";

import {
    Quy_Che_Hoat_Dong,
    Gioi_Thieu_Ve_Cong_Ty,
    Cau_Hoi_Thuong_Gap,
    Gioi_Thieu_May_Doi_Tra,
    Huong_Dan_Mua_Hang_Va_Thanh_Toan_Online
} from "~/pages/OrderPages"

import {
    Chinh_Sach_Bao_Hanh,
    Chinh_Sach_Doi_Tra,
    Chinh_Sach_Bao_Mat,
    Chinh_Sach_Tra_Gop,
    Chinh_Sach_Khui_Hop_San_Pham,
    Chinh_Sach_Thu_Thap_Va_Xu_Ly_Du_Lieu_Ca_Nhan,
    Chinh_Sach_Giao_Hang_Va_Lap_Dat,
    Quy_Dinh_Ve_Ho_Tro_Ky_Thuat_Va_Sao_Luu_Du_Lieu,
} from "~/pages/PolicyPages";

const publicRoutes = [
    //main pages
    { path: "/", component: Home, Layout: HeaderOnly},
    { path: "/Home", component: Home, Layout: HeaderOnly},
    { path: "/Phone", component: Phone, Layout: HeaderOnly},
    { path: "/ShoppingCart", component: ShoppingCart },
    { path: "/Profile", component: Profile, Layout: HeaderOnly},
    { path: "/Admin", component: Admin, Layout: null },
    { path: "/AboutUs", component: AboutUs, Layout: HeaderOnly },
    { path: "/Login", component: Login, Layout: HeaderOnly },

    //order pages
    { path: "/OrderPages/Cau_Hoi_Thuong_Gap", component: Cau_Hoi_Thuong_Gap, Layout: HeaderOnly },
    { path: "/OrderPages/Gioi_Thieu_May_Doi_Tra", component: Gioi_Thieu_May_Doi_Tra, Layout: HeaderOnly },
    { path: "/OrderPages/Gioi_Thieu_Ve_Cong_Ty", component: Gioi_Thieu_Ve_Cong_Ty, Layout: HeaderOnly },
    { path: "/OrderPages/Huong_Dan_Mua_Hang_Va_Thanh_Toan_Online", component: Huong_Dan_Mua_Hang_Va_Thanh_Toan_Online, Layout: HeaderOnly },
    { path: "/OrderPages/Quy_Che_Hoat_Dong", component: Quy_Che_Hoat_Dong, Layout: HeaderOnly },
    
    //policy pages
    { path: "/Policy/Chinh_Sach_Bao_Hanh", component: Chinh_Sach_Bao_Hanh, Layout: HeaderOnly },
    { path: "/Policy/Chinh_Sach_Doi_Tra", component: Chinh_Sach_Doi_Tra, Layout: HeaderOnly },
    { path: "/Policy/Chinh_Sach_Bao_Mat", component: Chinh_Sach_Bao_Mat, Layout: HeaderOnly },
    { path: "/Policy/Chinh_Sach_Tra_Gop", component: Chinh_Sach_Tra_Gop, Layout: HeaderOnly },
    { path: "/Policy/Chinh_Sach_Khui_Hop_San_Pham", component: Chinh_Sach_Khui_Hop_San_Pham, Layout: HeaderOnly },
    { path: "/Policy/Chinh_Sach_Thu_Thap_Va_Xu_Ly_Du_Lieu_Ca_Nhan", component: Chinh_Sach_Thu_Thap_Va_Xu_Ly_Du_Lieu_Ca_Nhan, Layout: HeaderOnly },
    { path: "/Policy/Chinh_Sach_Giao_Hang_Va_Lap_Dat", component: Chinh_Sach_Giao_Hang_Va_Lap_Dat, Layout: HeaderOnly },
    { path: "/Policy/Quy_Dinh_Ve_Ho_Tro_Ky_Thuat_Va_Sao_Luu_Du_Lieu", component: Quy_Dinh_Ve_Ho_Tro_Ky_Thuat_Va_Sao_Luu_Du_Lieu, Layout: HeaderOnly },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };