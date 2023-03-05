/* eslint-disable array-callback-return */
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import router from "./pages/router";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        {router.map(({ path, element, id }) => (
          <Route path={path} element={element} key={id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
