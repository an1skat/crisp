import { Link } from "react-router-dom";

interface LinkItem {
  text: string;
  href: string;
}

interface Props {
  data: LinkItem[];
}

let searchIcon;

export function Navbar({ data }: Props) {
  return (
    <nav>
      <ul className="">
        {data.map((el, index) => {
          const isLast = index === data.length - 1;

          return (
            <li key={el.href}>
              {isLast ? (
                <Link to={el.href} className="">
                  <img src={searchIcon} alt="Search Icon" />
                  {el.text}
                </Link>
              ) : (
                <Link to={el.href} className="">
                  {el.text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
