import UserHome from "./pages/user/home/Home";
import Home from "./pages/admin/home/Home";
import ListKhachHang from "./pages/KhachHang/ListKhachHang";
import ListSanPham from "./pages/SanPham/ListSanPham";
import AddSP from "./pages/SanPham/CreateSanPham";
import ListNhanVien from "./pages/NhanVien/ListNhanVien";
import ListVoucher from "./pages/Voucher/ListVoucher";
<<<<<<< HEAD

import ListHoaDonChiTiet from "./pages/HoaDonChiTiet/ListHoaDonChiTiet";

=======
import ListHoaDon from "./pages/HoaDon/ListHoaDon";
>>>>>>> f4e871da77a879f1b21fdbc077e6811d8905836d
import ListNSX from "./pages/NSX/ListNSX";
import AddNSX from "./pages/NSX/CreateNSX";
import ListLoai from "./pages/Loai/ListLoai";
import SanPhamDetail from "./pages/SanPham/SanPhamDetail";
import ListVoucherCT from "./pages/VoucherCT/ListVoucherCT";
import CreateKhachHang from "./pages/KhachHang/CreateKhachHang";
import ViewKhachHang from "./pages/KhachHang/ViewKhachHang";
<<<<<<< HEAD
import ListHoaDon from "./pages/HoaDon/ListHoaDon";




=======
import ListNhanVien from "./pages/NhanVien/ListNhanVien";
import CreateNhanVien from "./pages/NhanVien/CreateNhanVien";
>>>>>>> f4e871da77a879f1b21fdbc077e6811d8905836d

const publicRouters = [
    {path: '/', element: Home},
    {path: '/new/', element: ListKhachHang},
    {path: '/nhan-vien/new/', element: ListNhanVien},
    {path: '/nhan-vien/add/', element: CreateNhanVien},
    {path: '/home', element: UserHome},
    {path: '/voucher/new/', element: ListVoucher},
    {path: '/products/', element: ListSanPham},
<<<<<<< HEAD

    {path: '/addSP', element: AddSP},
    {path: '/hdct/hien-thi/', element: ListHoaDonChiTiet},
    {path: '/hoa-don/hien-thi/', element: ListHoaDon},

=======
    {path: '/addSP', element: AddSP},
    {path: '/hdct/hien-thi/', element: ListHoaDon},
>>>>>>> f4e871da77a879f1b21fdbc077e6811d8905836d
    {path: '/voucherct/new/', element: ListVoucherCT},
    {path: '/nsx/', element: ListNSX},
    {path: '/addSP', element: AddSP},
    {path: '/addNSX', element: AddNSX},
    {path: '/loai/', element: ListLoai},
    {path: '/products/:id', element: SanPhamDetail},
    {path: '/new/add', element: CreateKhachHang},
    {path: '/new/:id', element: ViewKhachHang},
<<<<<<< HEAD
    

=======
>>>>>>> f4e871da77a879f1b21fdbc077e6811d8905836d
]
const privateRouters = []

export  {publicRouters, privateRouters}