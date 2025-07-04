import React, { lazy, Suspense } from "react";
import Loading from "../components/loading/Loading";
import { Route, Routes } from "react-router";
import NotFound from "../components/notFound/NotFound";

const Home = lazy(() => import("../components/Home/Home"));

const Routers = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routers;
