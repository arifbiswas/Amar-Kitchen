import AddServices from "../../Components/Services/AddServices/AddServices";
import Login from "../../Components/Log/Login/Login";
import Register from "../../Components/Log/Register/Register";
import Services from "../../Components/Services/Services/Services";
import Reviews from "../../Components/Reviews/Reviews/Reviews";
import MyReviews from "../../Components/Reviews/MyReviews/MyReviews/MyReviews";
import ReviewUpdate from "../../Components/Reviews/ReviewUpdate/ReviewUpdate";
import Blogs from "../../Components/Blogs/Blogs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Components/Home/Home/Home");
const { default: Main } = require("../../Layouts/Main/Main");

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main />,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/addServices',
                element : <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path : '/services',
                element : <Services></Services>
            },
            {
                path : '/services/:id',
                element : <PrivateRoute><Reviews></Reviews></PrivateRoute>,
                loader : ({params})=> fetch(`https://ass-11-amar-kitchen-server-arifbiswas.vercel.app/services/${params.id}`)
            },
            {
                path : '/myReviews',
                element : <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path : '/myReviews/:id',
                element : <PrivateRoute><ReviewUpdate></ReviewUpdate></PrivateRoute>
            },
            {
                path : '/blogs',
                element : <Blogs></Blogs>
            },
        ]
    }
])

export default router;