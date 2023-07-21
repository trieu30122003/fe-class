import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRouters } from "./router";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

// import ListKhachHang from "./components/ListKhachHang";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="container">
      {/* <ListKhachHang /> */}
      <div className={darkMode ? "app dark" : "app"}>
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
    </div>
  );
}

export default App;
