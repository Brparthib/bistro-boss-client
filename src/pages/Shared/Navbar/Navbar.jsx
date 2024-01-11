import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="menu">Our Menu</Link>
      </li>
      <li>
        <Link to="order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="secret">Secret</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-black fixed top-0 max-w-screen-xl z-50 bg-opacity-40  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl mb-3">
            Bistro Boss <br /> Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link to="dashboard/mycart">
                <button className="bg-black py-1 px-2 rounded-lg flex items-center">
                  <FaCartShopping className="text-2xl" />
                  <div className="text-rose-500 text-sm">
                    +{cart?.length || 0}
                  </div>
                </button>
              </Link>
              <div className="dropdown dropdown-end text-black mx-5">
                <div
                  tabIndex={0}
                  role="button"
                  className="w-12 h-12 rounded-full border border-1"
                >
                  <img
                    className="w-full h-full rounded-full"
                    src={user?.photoURL}
                    alt="img"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>{user?.displayName}</a>
                  </li>
                  <li>
                    <Link to='dashboard/mycart'>Dashboard</Link>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link className="btn btn-ghost" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
