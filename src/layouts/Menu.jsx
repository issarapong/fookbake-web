import { useLocation } from "react-router-dom";
import { HouseIcon, UserGroupIcon } from "../icons";
import MenuItem from "./MenuItem";

const menus = [
  { id: 1, Icon: HouseIcon, to: "/" },
  { id: 2, Icon: UserGroupIcon, to: "/friend" },
];

export default function Menu() {
  const location = useLocation(); // { pathname: "/" }

  return (
    <nav className="flex justify-center items-center gap-4">
      {menus.map((el) => (
        <MenuItem
          Icon={el.Icon}
          to={el.to}
          key={el.id}
          active={location.pathname === el.to}
        />
      ))}
    </nav>
  );
}