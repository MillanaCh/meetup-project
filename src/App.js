import { Route, Routes } from "react-router-dom";
import router from "./pages/router";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {router.map(({ path, element, id }) => (
          <Route path={path} element={element} key={id} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
