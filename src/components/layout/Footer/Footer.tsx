import Contacts from "./Contacts";
import Copyright from "./Copyright";
import FooterDescription from "./Description";
import Information from "./Information";
import Menu from "./Menu";

const Footer = () => {
  return (
    <section className="container m-auto w-full md:px-5 md:border-gold border-t-gold border-t-2">
      <FooterDescription />
      <div className="w-full flex flex-col justify-between border-gold border-y-2 py-20 gap-20 items-center  md:flex-row md:items-start md:border-t-0 md:py-10">
        <Menu />
        <Contacts />
        <Information />
      </div>
      <Copyright />
    </section>
  );
};

export default Footer;
