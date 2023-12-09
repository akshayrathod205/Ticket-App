import { faTicket, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex flex-row justify-between bg-default-text p-3">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="text-white icon" />
        </Link>
        <Link href="/ticket/">
          <FontAwesomeIcon icon={faTicket} className="text-white icon" />
        </Link>
      </div>
      <div className="">
        <p className="text-white">akshay@gmail.com</p>
      </div>
    </div>
  );
};

export default Nav;
