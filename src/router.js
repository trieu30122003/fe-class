import UserHome from "./pages/user/home/Home";
import Home from "./pages/admin/home/Home";
import ListKhachHang from "./pages/KhachHang/ListKhachHang";
import ListSanPham from "./pages/SanPham/ListSanPham";
import AddSP from "./pages/SanPham/CreateSanPham";
import ListNhanVien from "./pages/NhanVien/ListNhanVien";
import ListVoucher from "./pages/Voucher/ListVoucher";
import ListNSX from "./pages/NSX/ListNSX";
import ListLoai from "./pages/Loai/ListLoai";
import ListMauSac from "./pages/MauSac/ListMauSac";
import ListManHinh from "./pages/ManHinh/ListManHinh";

const publicRouters = [
    {path: '/', element: Home},
    {path: '/new/', element: ListKhachHang},
    {path: '/nhan-vien/new/', element: ListNhanVien},
    {path: '/home', element: UserHome},
    {path: '/voucher/new/', element: ListVoucher},
    {path: '/products/', element: ListSanPham},
    {path: '/nsx/', element: ListNSX},
    {path: '/addSP', element: AddSP},
    {path: '/nsx/', element: ListNSX},
    {path: '/loai/', element: ListLoai},
    {path: '/mau-sac/', element: ListMauSac},
    {path: '/man-hinh/', element: ListManHinh}
]
const privateRouters = []

export  {publicRouters, privateRouters}