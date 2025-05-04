import { lazy, Suspense, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainLoader from "./components/MainLoader/MainLoader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <MainLoader />;
  }

  return (
    <Suspense fallback="null">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
