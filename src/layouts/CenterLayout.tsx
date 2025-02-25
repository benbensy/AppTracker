import { Outlet } from "react-router";

export default function CenterLayout() {
  return <div className="flex flex-col items-center justify-center h-full">
    <Outlet />
  </div>
}