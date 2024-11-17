// ------ CSS ------
import "./App.css";
// ------ CUSTOM COMPONENTS ------
import Header from "./components/Header/Header";
import About from "./components/Sections/About/About";
import Projects from "./components/Sections/Projects/Projects";
import Posts from "./components/Sections/Posts/Posts";
import Footer from "./components/Footer/Footer";
import Loader from "./components/UI/Loader";
// ------ THEME --------
import { useContext, useState, useEffect } from "react";
import { ThemeCtx } from "./store/ThemeCtx";

function App() {
  const ctx = useContext(ThemeCtx);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={`App ${ctx.theme}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header loading={loading}></Header>
          <About></About>
          <Projects></Projects>
          <Posts></Posts>
          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export default App;
