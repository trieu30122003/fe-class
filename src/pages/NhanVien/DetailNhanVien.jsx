import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NhanVienService from "../../service/NhanVienService";


const AddEmployee = () => {
    const [ma, setMa] = useState('');
    const [sdt, setSdt] = useState('');
    // const [matKhau, setMatKhau] = useState('');
    const history = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            NhanVienService.getNVById(id)
            .then(nv => {
                setMa(nv.data.ma);
                setSdt(nv.data.sdt);
                // setMatKhau(nv.data.matKhau);
            })
                .catch(error => {
                    console.log('Lỗi!', error);
                })
        }
    }, [id])
    return (
        <div className="container">
            <hr />
            <form>
                <div className="form-group">
                    <h1 color="red">NHÂN VIÊN</h1>
                    <input type="text" placeholder="ma" name="ma" className='form-control' value={ma} readOnly  />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4"  id="sdt" 
                    name='sdt' value={sdt} readOnly
                    
                    placeholder="sdt"
                    />
                </div>
            </form>
            <hr />
            <Link to = "/nhan-vien/new">Trở lại danh sách</Link>
        </div>
    )

}


export default AddEmployee;