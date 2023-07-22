import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import KhachHangService from "../../service/KhachHangService";


const AddEmployee = () => {
    const [ma, setMa] = useState('');
    const [ho, setHo] = useState('');
    const history = useNavigate();
    const { id } = useParams();

    // const saveKH = (e) => {
    //     e.preventDefault();

    //     const kh = {ma, ho, id};
    //     if (id) {
    //         //update
    //         KhachHangService.updateKH(kh)
    //             .then(response => {
    //                 console.log('kh data updated successfully', response.data);
    //                 history.push('/new');
    //             })
    //             .catch(error => {
    //                 console.log('Something went wrong', error);
    //             }) 
    //     } else {
    //         //create
    //         KhachHangService.createKH(kh)
    //         .then(response => {
    //             console.log("kh added successfully", response.data);
    //             history.push("/new");
    //         })
    //         .catch(error => {
    //             console.log('something went wroing', error);
    //         })
    //     }
    // }

    useEffect(() => {
        if (id) {
            KhachHangService.getKHById(id)
                .then(kh => {
                    setMa(kh.data.ma);
                    setHo(kh.data.ho);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [id])
    return (
        <div className="container">
            <h3>{ma}</h3>
            <hr />
            <form>
                <div className='form-group'>
                    <label htmlFor="">Mã</label>
                    <input type="text" placeholder=' mã' name='ma' className='form-control'
                        value={ma} />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="ho"
                        value={ho}
                        onChange={(e) => setHo(e.target.value)}
                        placeholder="Enter ho"
                    />

                </div>

                {/* <div >
                    <button onClick={(e) => saveKH(e)} className="btn btn-primary">Save</button>
                </div> */}
            </form>
            <hr />
            <Link to="/new">Back to List</Link>
        </div>
    )
}

export default AddEmployee;