import AddServices from "../../Components/Home/Services/AddServices/AddServices";
import Login from "../../Components/Log/Login/Login";
import Register from "../../Components/Log/Register/Register";

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
                element : <AddServices></AddServices>
            },
        ]
    }
])

export default router;