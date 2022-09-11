import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { LOGO } from "../../modules/imagesUrl/url";
import { RootState } from "../../app/store";
import HandleShow from "./HandleShow";
import Dropdown from "./Dropdown";
import { header, headerText, nav } from "../../Styles/Navbar/navbarMain";
const Header = () => {
  const { modal } = useSelector((state: RootState) => state.modal);

  return (
    <div>
      {modal ? <Modal /> : null}
      <nav className={nav}>
        <div className={header}>
          <div className="flex items-center">
            <img src={LOGO} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className={headerText}>Ecommerce</span>
          </div>
          <div className="flex md:order-2">
            <div className="relative md:block mr-4">
              <Dropdown />
            </div>
            <HandleShow />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
