import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const ProductCard = lazy(() => import("./pages/ProductCard"));
const Rejected = lazy(() => import("./components/Rejected"));
const StartPage = lazy(() => import("./pages/StartPage"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/:pageNum" element={<Home />}>
            <Route path="/:pageNum/card/:productId" element={<ProductCard />} />
          </Route>
          <Route path="*" element={<Rejected />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
