import React, { Component } from 'react';
import SanPhamChiTietService from '../../service/SanPhamChiTietService'; // Định dạng đường dẫn đúng

class SanPhamDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    };
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    // Gọi service để lấy thông tin chi tiết sản phẩm dựa vào productId
    SanPhamChiTietService.getSPById(productId)
      .then((response) => {
        // Cập nhật state với thông tin chi tiết sản phẩm từ service
        this.setState({ product: response.data });
      })
      .catch((error) => {
        // Xử lý lỗi nếu gọi service thất bại
        console.error(error);
      });
  }

  render() {
    const { product } = this.state;

    if (!product) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{product.ten}</h2>
        <p>Mã: {product.ma}</p>
        <p>Giá bán: {product.giaBan}</p>
        <p>Loại: {product.idLoai.ten}</p>
        <p>Màu sắc: {product.idMauSac.ten}</p>
        <p>Màu sắc: {product.idManHinh.tinhChongXuoc}</p>
        <p>Màu sắc: {product.idDayDeo.ten}</p>
        <p>Màu sắc: {product.idNsx.ten}</p>
        {/* Hiển thị các thông tin khác về sản phẩm */}
      </div>
    );
  }
}

export default SanPhamDetail;