import SocialMedia from "./SocialMedia";
import { mockFooterData } from "./mockFooterData";

const Contacts = () => {
  return (
    <nav className="flex items-center flex-col gap-2">
      <h3 className="text-gold font-semibold xl:flex-col xl:items-start">
        {mockFooterData.contacts.title}
      </h3>
      <ul className="flex gap-2 flex-col items-center text-dark xl:flex-row xl:items-start">
        {mockFooterData.contacts.links.map(item =>
          <li key={item.id}>
            <div className="flex flex-row gap-2">
              <p>
                {item.title}
              </p>
              <p>
                {item.text}
              </p>
            </div>
          </li>
        )}
      </ul>
      <SocialMedia />
    </nav>
  );
};

export default Contacts;
