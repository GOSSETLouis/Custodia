export interface LinkName {
  name: string;
  path: string;
}

export function Link({ name, path }: LinkName) {
  return (
    <li className={"Links"}>
      <a className={`singleLink${location.pathname === path ? " activeLink" : ""}`} href={path}>
        {name}
      </a>
    </li>
  );
}
