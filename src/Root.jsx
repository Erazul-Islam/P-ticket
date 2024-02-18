import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="ml-40 mr-40">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;