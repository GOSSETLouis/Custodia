import { useLocation } from "react-router-dom";

export interface LinkName {
  name: string;
  path: string;
}

export function Link({ name, path }: LinkName) {
  const location = useLocation();
  return (
    <li className={"Links"}>
      <a className={`singleLink${location.pathname === path ? " activeLink" : ""}`} href={path}>
        {name}
      </a>
    </li>
  );
}
