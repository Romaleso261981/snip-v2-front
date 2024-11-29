import { mockFooterData } from "./mockFooterData";

const Menu = () => {
  return (
    <nav className="flex min-w-40 items-center flex-col gap-4">
      <h3 className="text-gold font-semibold">
        {mockFooterData.Contacts.title}
      </h3>
      <ul className="flex items-center gap-4 flex-col text-dark xl:flex-row xl:items-start">
        {mockFooterData.Contacts.contacts.map((contact, index) =>
          <li key={index} className="flex flex-row">
            <p>
              {contact.title}
            </p>
            <p>
              {contact.text}
            </p>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
