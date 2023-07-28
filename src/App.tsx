import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import route from "./route";
import { Suspense } from "react";
import ReactLoading from "react-loading";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Content">
        <Suspense fallback={<ReactLoading type="spin" color="blue" />}>
          <Routes>
            {route.map((r) => (
              <Route
                path={r.path}
                caseSensitive={false}
                element={<r.component />}
                key={r.path}
              />
            ))}
            <Route path="/" element={<></>} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
