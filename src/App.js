import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRouters } from "./router";


// import ListKhachHang from "./components/ListKhachHang";
function App() {

  return (
    <div className="container">
      {/* <ListKhachHang /> */}
        <BrowserRouter>
          <Routes>
            {publicRouters.map((route, index) => {
              const Page = route.element
              return <Route exact key={index} path={route.path} element={<Page />}></Route>
            })
            }
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
