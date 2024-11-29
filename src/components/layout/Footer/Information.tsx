import { Link } from "@/i18n/routing";
import { mockFooterData } from "./mockFooterData";

const Information = () => {
  return (
    <nav className="flex min-w-40 text-center flex-col gap-2 mb-10">
      <h3 className="text-gold font-semibold xl:items-start">
        {mockFooterData.Information.title}
      </h3>
      <div className="flex gap-3 flex-col items-center">
        <ul className="flex gap-3 flex-col text-center items-center text-dark xl:flex-row">
          {mockFooterData.Information.links.map((link, index) =>
            <li key={index}>
              <Link href={link.href}>
                {link.title}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Information;
