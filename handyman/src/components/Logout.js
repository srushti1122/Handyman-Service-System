import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./slice";

export default function LogoutComp(){
    const navigator = useNavigate();
    const dispatch = useDispatch();
    localStorage.clear();
    dispatch(logout());
    navigator("/");
}