import UserHome from "./pages/user/home/Home";
import Home from "./pages/admin/home/Home";
import ListKhachHang from "./pages/KhachHang/ListKhachHang";
import CreateKhachHang from "./pages/KhachHang/CreateKhachHang";
import ViewKhachHang from "./pages/KhachHang/ViewKhachHang";

const publicRouters = [
    {path: '/', element: Home},
    {path: '/new/', element: ListKhachHang},
    {path: '/home', element: UserHome},
    {path: '/new/add', element: CreateKhachHang},
    {path: '/new/:id', element: ViewKhachHang},
]
const privateRouters = []

export  {publicRouters, privateRouters}