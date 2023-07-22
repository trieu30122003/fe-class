import UserHome from "./pages/user/home/Home";
import Home from "./pages/admin/home/Home";
import ListKhachHang from "./pages/KhachHang/ListKhachHang";
import ListSanPham from "./pages/SanPham/ListSanPham";
import ListNhanVien from "./pages/NhanVien/ListNhanVien";
import AddSP from "./pages/SanPham/CreateSanPham";
import ListVoucher from "./pages/Voucher/ListVoucher";
import ListHoaDonChiTiet from "./pages/HoaDonChiTiet/ListHoaDonChiTiet";
import ListHoaDon from "./pages/HoaDon/ListHoaDon";
import ListNSX from "./pages/NSX/ListNSX";
import AddNSX from "./pages/NSX/CreateNSX";
import ListLoai from "./pages/Loai/ListLoai";
import SanPhamDetail from "./pages/SanPham/SanPhamDetail";
import ListVoucherCT from "./pages/VoucherCT/ListVoucherCT";
import CreateKhachHang from "./pages/KhachHang/CreateKhachHang";
import CreateHoaDon from "./pages/HoaDon/CreateHoaDon";
import ViewKhachHang from "./pages/KhachHang/ViewKhachHang";
import CreateNhanVien from "./pages/NhanVien/CreateNhanVien";
<<<<<<< HEAD
import ViewHoaDon from "./pages/HoaDon/ViewHoaDon";
=======
import ViewVoucher from "./pages/Voucher/ViewVoucher";


>>>>>>> 488e66732b0fdc10fec621d1f9155d608153ce79


const publicRouters = [
    {path: '/', element: Home},
    {path: '/new/', element: ListKhachHang},
    {path: '/nhan-vien/new/', element: ListNhanVien},
    {path: '/nhan-vien/add/', element: CreateNhanVien},
    {path: '/home', element: UserHome},
    {path: '/voucher/new/', element: ListVoucher},
    {path: '/products/', element: ListSanPham},
    {path: '/addSP', element: AddSP},
    {path: '/hdct/hien-thi/', element: ListHoaDonChiTiet},
    {path: '/hoa-don/hien-thi/', element: ListHoaDon},
    {path: '/voucherct/new/', element: ListVoucherCT},
    {path: '/nsx/', element: ListNSX},
    {path: '/addNSX', element: AddNSX},
    {path: '/loai/', element: ListLoai},
    {path: '/products/:id', element: SanPhamDetail},
    {path: '/new/add', element: CreateKhachHang},
    {path: '/new/:id', element: ViewKhachHang},
<<<<<<< HEAD
    {path: '/addHD', element: CreateHoaDon},
    {path: '/hien-thi/:id', element: ViewHoaDon},

=======
    {path: '/voucher/new/:id', element: ViewVoucher},
>>>>>>> 488e66732b0fdc10fec621d1f9155d608153ce79
]
const privateRouters = []

export  {publicRouters, privateRouters}