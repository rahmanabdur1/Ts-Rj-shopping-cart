import { Navbars } from "../Components/Navbars/Navbars";
import { Outlet } from 'react-router-dom';
export function Main(){
    return <>
    <Navbars/>
    <Outlet/>
    </>
}