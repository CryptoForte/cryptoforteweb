import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";

export default function HomeLayout() {
  return (
    <div>
      <Navbar />

      <div className=" mt-[80px] ">
        <Outlet />
      </div>
    </div>
  );
}
