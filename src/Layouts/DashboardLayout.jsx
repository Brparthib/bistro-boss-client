import {
  FaBagShopping,
  FaBars,
  FaBook,
  FaBookBookmark,
  FaCalendarDays,
  FaCartShopping,
  FaHouse,
  FaRankingStar,
  FaUsers,
  FaWallet,
} from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { AiOutlineBars } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
  // TODO: load data from the server to have dynamic isAdmin based on Data.
  // const isAdmin = true;
  const [isAdmin] = useAdmin()

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-gray-100">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#D1A054] p-4 w-60 min-h-full text-base-content">
            <h2 className="text-xl font-light text-center mb-8">
              Bistro Boss <br /> Restaurant
            </h2>
            {isAdmin ? (
              <>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/myCart">
                    <FaHouse className="text-2xl" />
                    Admin Home
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/addItem">
                    <ImSpoonKnife className="text-2xl" />
                    Add Items
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/manageItems">
                    <AiOutlineBars className="text-2xl" />
                    Manage Items
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/myCart">
                    <FaBook className="text-2xl" />
                    Manage Bookings
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/allUsers">
                    <FaUsers className="text-2xl" />
                    All Users
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/myCart">
                    <FaHouse className="text-2xl" />
                    User Home
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/myCart">
                    <FaCalendarDays className="text-2xl" />
                    Reservation
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/myCart">
                    <FaWallet className="text-2xl" />
                    Payment History
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/myCart">
                    <FaCartShopping className="text-2xl" />
                    My Cart
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/myCart">
                    <FaRankingStar className="text-2xl" />
                    Add Review
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link className="uppercase font-bold" to="/dashboard/myCart">
                    <FaBookBookmark className="text-2xl" />
                    My Booking
                  </Link>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li className="hover:text-white">
              <Link className="uppercase font-bold" to="/">
                <FaHouse className="text-2xl" />
                Home
              </Link>
            </li>
            <li className="hover:text-white">
              <Link className="uppercase font-bold" to="/dashboard/myCart">
                <FaBars className="text-2xl" />
                Menu
              </Link>
            </li>
            <li className="hover:text-white">
              <Link className="uppercase font-bold" to="/dashboard/myCart">
                <FaBagShopping className="text-2xl" />
                Shop
              </Link>
            </li>
            <li className="hover:text-white">
              <Link className="uppercase font-bold" to="/dashboard/myCart">
                <MdContactMail className="text-2xl" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
