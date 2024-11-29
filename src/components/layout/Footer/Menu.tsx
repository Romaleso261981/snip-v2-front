import { mockFooterData } from "./mockFooterData";

const Menu = () => {
  return (
    <nav className="flex min-w-40 items-center flex-col gap-4">
      <h3 className="text-gold font-semibold">
        {mockFooterData.menu.title}
      </h3>
      <ul className="flex items-center gap-4 flex-col text-dark xl:flex-row xl:items-start">
        {mockFooterData.menu.links.map(link =>
          <li key={link.title}>
            {link.title}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
