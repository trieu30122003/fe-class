import UserHome from "./pages/user/home/Home";
import Home from "./pages/admin/home/Home";
import ListKhachHang from "./pages/KhachHang/ListKhachHang";
import ListSanPham from "./pages/SanPham/ListSanPham";
import AddSP from "./pages/SanPham/CreateSanPham";
import ListNhanVien from "./pages/NhanVien/ListNhanVien";
import ListVoucher from "./pages/Voucher/ListVoucher";
<<<<<<< HEAD
import ListHoaDon from "./pages/HoaDon/ListHoaDon";
=======
import ListNSX from "./pages/NSX/ListNSX";
import AddNSX from "./pages/NSX/CreateNSX";
import ListLoai from "./pages/Loai/ListLoai";
import SanPhamDetail from "./pages/SanPham/SanPhamDetail";
import ListVoucherCT from "./pages/VoucherCT/ListVoucherCT";
import CreateKhachHang from "./pages/KhachHang/CreateKhachHang";
import ViewKhachHang from "./pages/KhachHang/ViewKhachHang";



>>>>>>> 682b800952f466ccaae2513f418dc8db7a9fec31

const publicRouters = [
    {path: '/', element: Home},
    {path: '/new/', element: ListKhachHang},
    {path: '/home', element: UserHome},
    {path: '/voucher/new/', element: ListVoucher},
    {path: '/products/', element: ListSanPham},
<<<<<<< HEAD
    {path: '/addSP', element: AddSP},
    {path: '/hdct/hien-thi/', element: ListHoaDon}
=======
    {path: '/voucherct/new/', element: ListVoucherCT},
    {path: '/nsx/', element: ListNSX},
    {path: '/addSP', element: AddSP},
    {path: '/addNSX', element: AddNSX},
    {path: '/loai/', element: ListLoai},
    {path: '/products/:id', element: SanPhamDetail},
    {path: '/new/add', element: CreateKhachHang},
    {path: '/new/:id', element: ViewKhachHang},
>>>>>>> 682b800952f466ccaae2513f418dc8db7a9fec31
]
const privateRouters = []

export  {publicRouters, privateRouters}