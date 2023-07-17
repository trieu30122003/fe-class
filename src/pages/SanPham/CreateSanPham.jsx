import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Sidebar from '../../components/sidebar/Sidebar';
import MenuItem from '@mui/material/MenuItem';
import { Navbar } from 'react-bootstrap';


export default function AddSP() {
    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];
  return (
    <div className="home">
        <Sidebar />
            <div className="homeContainer">
                    <Navbar />
                    <h2 className="text-center">Add Sản Phẩm</h2>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-password-input"
          label="Mã"
          type="text"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Tên"
          type="text"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Loại"
          defaultValue="EUR"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Màu sắc"
          defaultValue="EUR"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Dây đeo"
          defaultValue="EUR"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Màn hình"
          defaultValue="EUR"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Nhà sản xuất"
          defaultValue="EUR"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-password-input"
          label="Giá bán"
          type="number"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Tình trạng"
          type="text"
          autoComplete="current-password"
        />
      </div>
    </Box>
    </div>
    </div>
  );
}
