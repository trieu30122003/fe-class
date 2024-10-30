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
import { Navigate } from 'react-router-dom';
import SanPhamDetail from "./pages/SanPham/SanPhamDetail";
import ListVoucherCT from "./pages/VoucherCT/ListVoucherCT";
import CreateKhachHang from "./pages/KhachHang/CreateKhachHang";
import CreateHoaDon from "./pages/HoaDon/CreateHoaDon";
import ViewKhachHang from "./pages/KhachHang/ViewKhachHang";
import CreateNhanVien from "./pages/NhanVien/CreateNhanVien";

import ViewHoaDon from "./pages/HoaDon/ViewHoaDon";

import ViewVoucher from "./pages/Voucher/ViewVoucher";
import ListClass from "./pages/Class/ListClass";
import CreateClass from "./pages/Class/CreateClass";
import ClassDetail from "./pages/Class/ClassDetail";
import AddUserToClass from "./pages/Class/AddUserToClass";
import CreateSchedule from "./pages/NSX/CreateNSX";
import Login from "./pages/user/home/Login";
import DetailStudent from "./pages/KhachHang/ListStudent";
import CreateScore from "./pages/Loai/CreateLoai";
import CreateSubject from "./pages/MauSac/CreateMauSac";
import DetailTeacher from "./pages/KhachHang/ListTeacher";



const publicRouters = [
    {path: '/', element: Login},
    {path: '/new/', element: ListKhachHang},
    {path: '/nhan-vien/new/', element: ListNhanVien},
    {path: '/add-gv', element: CreateNhanVien},
    {path: '/home', element: UserHome},
    {path: '/class', element: ListClass},
    {path: '/add-class', element: CreateClass},
    {path: '/class-detail/:id', element: ClassDetail},
    {path: '/hdct/hien-thi/', element: ListHoaDonChiTiet},
    {path: '/hoa-don/hien-thi/', element: ListHoaDon},
    {path: '/voucherct/new/', element: ListVoucherCT},
    {path: '/add-score', element: CreateScore},
    {path: '/add-to-class', element: AddUserToClass},
    {path: '/schedule/', element: CreateSchedule},
    {path: '/products/:id', element: SanPhamDetail},
    {path: '/add-st', element: CreateKhachHang},
    {path: '/detail/:id', element: ViewKhachHang},
    {path: '/subject', element: CreateSubject},

    {path: '/addHD', element: CreateHoaDon},
    {path: '/hien-thi/:id', element: ViewHoaDon},
    {path: '/login', element: Login},
    {path: '/view-student/:id', element: DetailStudent},
    {path: '/view-teacher/:id', element: DetailTeacher},


    {path: '/voucher/new/:id', element: ViewVoucher},

]
const privateRouters = []

export  {publicRouters, privateRouters}

