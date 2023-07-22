// import React, { useState , useEffect } from 'react'
// import Sidebar from '../../components/sidebar/Sidebar';
// import { useParams } from "react-router-dom";
// import Box from '@mui/material/Box';
// import { Navbar } from 'react-bootstrap';
// import SanPhamChiTietService from '../../service/SanPhamChiTietService';
// import LoaiService from '../../service/LoaiService';
// import NSXService from '../../service/NSXService';
// import ManHinhService from '../../service/ManHinhService';
// import MauSacService from '../../service/MauSacService';
// import SanPhamService from '../../service/SanPhamService';
// import DayDeoService from '../../service/DayDeoService';

// const SanPhamDetail = () => {
//   const { id } = useParams();
//   const [ma, setMa] = useState('');
//   const [ten, setTen] = useState('');
//   const [idLoai, setidLoai] = useState(null);
//   const [selectidLoai, setselectidLoai] = useState(null);
//   const [idMauSac, setidMauSac] = useState('');
//   const [selectidMauSac, setselectidMauSac] = useState(null);
//   const [idManHinh, setidManHinh] = useState('');
//   const [selectidManHinh, setselectidManHinh] = useState(null);
//   const [idDayDeo, setidDayDeo] = useState('');
//   const [selectidDayDeo, setselectiDayDeo] = useState(null);
//   const [idNsx, setidNsx] = useState('');
//   const [selectidNsx, setselectidNsx] = useState(null);
//   const [idSP, setidSP] = useState('');
//   const [selectidSP, setselectidSP] = useState(null);
//   const [giaBan, setgiaBan] = useState('');
//   const [tinhTrang, settinhTrang] = useState('');


//   useEffect(() => {
//     lstDayDeo();
//     lstLoai();
//     lstManHinh();
//     lstMauSac();
//     lstNsx();
//     lstSP();
//     SanPhamChiTietService.getSPById(id).then((res) => {
//       let spct = res.data;
//       setTen(spct.ten);
//       setMa(spct.ma);
//       setselectiDayDeo(spct.idDayDeo.ten);
//       setselectidLoai(spct.idLoai.ten);
//       setselectidManHinh(spct.idManHinh.tinhTrongXuoc);
//       setselectidNsx(spct.idNsx.ten);
//       setselectidSP(spct.idSP.ten);
//       setselectidMauSac(spct.idMauSac.ten);
//       setgiaBan(spct.giaBan);
//       settinhTrang(spct.tinhTrang);
//     });
//   }, [id]);

//   const lstNsx = () => {
//     NSXService.getNSX().then((response) => {
//       setidNsx(response.data);
//     }).catch((error) => {
//       console.log(error);
//     });
//   };
//   const lstDayDeo = () => {
//     DayDeoService.getDayDeo().then((response) => {
//       setidDayDeo(response.data);
//     }).catch((error) => {
//       console.log(error);
//     });
//   };
//   const lstManHinh = () => {
//     ManHinhService.getMH().then((response) => {
//       setidManHinh(response.data);
//     }).catch((error) => {
//       console.log(error);
//     });
//   };
//   const lstMauSac = () => {
//     MauSacService.getMS().then((response) => {
//       setidMauSac(response.data);
//     }).catch((error) => {
//       console.log(error);
//     });
//   };
//   const lstSP = () => {
//     SanPhamService.getSP().then((response) => {
//       setidSP(response.data);
//     }).catch((error) => {
//       console.log(error);
//     });
//   };
//   const lstLoai = () => {
//     LoaiService.getLoai().then((response) => {
//       setidLoai(response.data);
//     }).catch((error) => {
//       console.log(error);
//     });
//   };

//   const ChangeMa = (e) => {
//     setMa(e.target.value);
//   };

//   const ChangeTen = (e) => {
//     setTen(e.target.value);
//   };
//   const ChangeLoai = (e) => {
//     setselectidLoai(e.target.value);
//   };
//   const ChangeManHinh = (e) => {
//     setselectidManHinh(e.target.value);
//   };

//   const ChangeDayDeo = (e) => {
//     setselectiDayDeo(e.target.value);
//   };
//   const ChangeMauSac = (e) => {
//     setselectidMauSac(e.target.value);
//   };
//   const ChangeNsx = (e) => {
//     setselectidNsx(e.target.value);
//   };
//   const ChangeSP = (e) => {
//     setselectidSP(e.target.value);
//   };
//   const ChangeGiaBan = (e) => {
//     setgiaBan(e.target.value);
//   };
//   const ChangeTinhTrang = (e) => {
//     settinhTrang(e.target.value);
//   };
  
//   const updateSP = (e) => {
//     e.preventDefault();
//     let spct = {
//       id,
//       ma,
//       ten,
//       idLoai:{ten : selectidLoai},
//       idDayDeo:{ten : selectidDayDeo},
//       idManHinh:{tinhTrongXuoc : selectidManHinh},
//       idMauSac:{ten : selectidMauSac},
//       idNsx:{ten : selectidNsx},
//       idSP:{ten : selectidSP},
//       giaBan,
//       tinhTrang,
//     };
//     console.log('nhanvien =>' + JSON.stringify(spct));
//     SanPhamChiTietService.updateSP(id, spct).then(res => {
//       alert('Update Successful');
//       window.location.href = "/nhanvien/index";
//     });
//   };
//   return (
//     <div className="home">
//     <Sidebar />
//     <div className="homeContainer">
//       <Navbar />
//       <h2 className="text-center">Add Sản Phẩm</h2>
//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '60ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div>
//           <div className='form-group'>
//             <label htmlFor="">Mã</label>
//             <input type="text" placeholder='Nhập mã' name='ma' className='form-control'
//               value={ma} onChange={ChangeMa} />
//           </div>
//           <div className='form-group'>
//             <label htmlFor="">Tên</label>
//             <input type="text" placeholder='Nhập tên' name='ten' className='form-control'
//               value={ten} onChange={ChangeTen} />
//           </div>
//           <label htmlFor="">Loại</label>
//           <select
//             className="form-select"
//             name="idLoai"
//             value={selectidLoai}
//             onChange={ChangeLoai}
//           >
//             <option value={0}>Loai</option>
//             {idLoai.map((loai) => (
//               <option key={loai.id} value={loai.id}>
//                 {loai.ten}
//               </option>
//             ))}
//           </select>
//           <label htmlFor="">Màu sắc</label>
//           <select
//             className="form-select"
//             name="idMauSac"
//             value={selectidMauSac}
//             onChange={ChangeMauSac}
//           >
//             <option value={0}>Màu sắc</option>
//             {idMauSac.map((ms) => (
//               <option key={ms.id} value={ms.id}>
//                 {ms.ten}
//               </option>
//             ))}
//           </select>
//           <label htmlFor="">Màn hình</label>
//           <select
//             className="form-select"
//             name="idManHinh"
//             value={selectidManHinh}
//             onChange={ChangeManHinh}
//           >
//             <option value={0}>Màn hình</option>
//             {idManHinh.map((mh) => (
//               <option key={mh.id} value={mh.id}>
//                 {mh.tinhTrongXuoc == 1 ? "Chống xước" : "Không chống xước"}
//               </option>
//             ))}
//           </select>
//           <label htmlFor="">Sản phẩm</label>
//           <select
//             className="form-select"
//             name="idSanPham"
//             value={selectidSP}
//             onChange={ChangeSP}
//           >
//             <option value={0}>Sản phẩm</option>
//             {idSP.map((sp) => (
//               <option key={sp.id} value={sp.id}>
//                 {sp.ten}
//               </option>
//             ))}
//           </select>
//           <label htmlFor="">Dây đeo</label>
//           <select
//             className="form-select"
//             name="idDayDeo"
//             value={selectidDayDeo}
//             onChange={ChangeDayDeo}
//           >
//             <option value={0}>Dây đeo</option>
//             {idDayDeo.map((dd) => (
//               <option key={dd.id} value={dd.id}>
//                 {dd.ten}
//               </option>
//             ))}
//           </select>
//           <label htmlFor="">NSX</label>
//           <select
//             className="form-select"
//             name="idNsx"
//             value={selectidNsx}
//             onChange={ChangeNsx}
//           >
//             <option value={0}>Nhà sản xuất</option>
//             {idNsx.map((nsx) => (
//               <option key={nsx.id} value={nsx.id}>
//                 {nsx.ten}
//               </option>
//             ))}
//           </select>
//           <div className='form-group'>
//             <label htmlFor="">Giá bán</label>
//             <input type="text" placeholder='Nhập giá bán' name='giaBan' className='form-control'
//               value={giaBan} onChange={ChangeGiaBan} />
//           </div>
//           <div className="md-3">
//             <label>Trang Thái</label>
//             <input type="radio" name='tinhTrang'
//               value={tinhTrang}
//               onChange={ChangeTinhTrang} /> Ngừng hoạt động
//             <input type="radio" name='tinhTrang'
//               value={tinhTrang}
//               onChange={ChangeTinhTrang} />Hoạt động
//           </div>
//           <button className='btn btn-primary' onClick={updateSP}>Add</button>
//         </div>
//       </Box>
//     </div>
//   </div>
//   );
// }
// export default SanPhamDetail();
