import { Outlet } from "react-router-dom";

const MainComponents = () => {
    return (
        <div>
            <div className="w-[90%] max-w-[1440px] mx-auto mt-[50px]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainComponents;