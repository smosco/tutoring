import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Notice from "./pages/Notice";
import TeacherDetail from "./pages/TeacherDetail";
import StudentDetail from "./pages/StudentDetail";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/user/:userId",
          element: <User />,
        },
        {
          path: "/teachers",
          element: <Teachers />,
        },
        {
          path: "/students",
          element: <Students />,
        },
        {
          path: "/notice",
          element: <Notice />,
        },
        {
          path: "/teachers/:postId",
          element: <TeacherDetail />,
        },
        {
          path: "/students/:postId",
          element: <StudentDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
