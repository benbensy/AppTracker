import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col w-full h-full">
      <div></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
