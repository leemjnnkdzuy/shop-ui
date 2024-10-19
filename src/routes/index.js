//layout import
import { HeaderOnly } from "~/components/Layout";


//main pages
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Admin from "~/pages/Admin";
import AboutUs from "~/pages/AboutUs";
import Login from "~/pages/Login";
import Error from "~/pages/Error";
import Support from "~/pages/Support";

//product pages
import {
    Laptop,
    Phone,
    Acessory,
    Fridge,
    Tablet,
    Watch,
    TV,
    LinhKien,
    Washer,
    DustCollector,
    Moniter,
    PC,
} from "~/pages/ProductPages";

//shopping cart pages
import {
    Cart,
    Ship,
    Bought
} from "~/pages/ShoppingCart";

//order pages
import {
    Quy_Che_Hoat_Dong,
    Gioi_Thieu_Ve_Cong_Ty,
    Cau_Hoi_Thuong_Gap,
    Gioi_Thieu_May_Doi_Tra,
    Huong_Dan_Mua_Hang_Va_Thanh_Toan_Online
} from "~/pages/OrderPages"

//policy pages
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
    //home page
    { path: "/", component: Home, Layout: HeaderOnly },
    
    //error page
    { path: "*", component: Error, Layout: HeaderOnly },

    //ShoppingCart
    { path: "/Cart", component: Cart, Layout: HeaderOnly },
    { path: "/Ship", component: Ship, Layout: HeaderOnly },
    { path: "/Bought", component: Bought, Layout: HeaderOnly },

    //main pages
    { path: "/Home", component: Home, Layout: HeaderOnly},
    { path: "/Cart", component: Cart, Layout: HeaderOnly },
    { path: "/Profile", component: Profile, Layout: HeaderOnly},
    { path: "/Admin", component: Admin, Layout: null },
    { path: "/AboutUs", component: AboutUs, Layout: HeaderOnly },
    { path: "/Login", component: Login, Layout: HeaderOnly },
    { path: "/Support", component: Support, Layout: HeaderOnly },

    //product pages
    { path: "/ProductPages/Phone", component: Phone, Layout: HeaderOnly },
    { path: "/ProductPages/Laptop", component: Laptop, Layout: HeaderOnly },
    { path: "/ProductPages/Acessory", component: Acessory, Layout: HeaderOnly },
    { path: "/ProductPages/Fridge", component: Fridge, Layout: HeaderOnly },
    { path: "/ProductPages/Tablet", component: Tablet, Layout: HeaderOnly },
    { path: "/ProductPages/Watch", component: Watch, Layout: HeaderOnly },
    { path: "/ProductPages/TV", component: TV, Layout: HeaderOnly },
    { path: "/ProductPages/LinhKien", component: LinhKien, Layout: HeaderOnly },
    { path: "/ProductPages/Washer", component: Washer, Layout: HeaderOnly },
    { path: "/ProductPages/DustCollector", component: DustCollector, Layout: HeaderOnly },
    { path: "/ProductPages/Moniter", component: Moniter, Layout: HeaderOnly },
    { path: "/ProductPages/PC", component: PC, Layout: HeaderOnly },

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