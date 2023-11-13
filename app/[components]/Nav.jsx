import { faTicket, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex flex-row justify-between bg-nav p-3">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="text-default-text icon" />
        </Link>
        <Link href="/ticket/new">
          <FontAwesomeIcon icon={faTicket} className="text-default-text icon" />
        </Link>
      </div>
      <div className="">
        <p className="text-default-text">akshay@gmail.com</p>
      </div>
    </div>
  );
};

export default Nav;
