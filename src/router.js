import UserHome from "./pages/user/home/Home";
import Home from "./pages/admin/home/Home";
import ListKhachHang from "./pages/KhachHang/ListKhachHang";
import ListSanPham from "./pages/SanPham/ListSanPham";
import AddSP from "./pages/SanPham/CreateSanPham";

const publicRouters = [
    {path: '/', element: Home},
    {path: '/new/', element: ListKhachHang},
    {path: '/home', element: UserHome},
    {path: '/products/', element: ListSanPham},
    {path: '/addSP', element: AddSP}
]
const privateRouters = []

export  {publicRouters, privateRouters}