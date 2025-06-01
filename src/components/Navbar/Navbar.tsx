import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "You have logged out successfully.",
          icon: "success",
          confirmButtonText: "OK"
        });
      })
      .catch((error: unknown) => {
        Swal.fire({
          title: "Error!",
          text: `Failed to log out. Please try again. ${error}`,
          icon: "error",
          confirmButtonText: "OK"
        });
      });
  }

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl flex gap-0">
          TicTac
          <span className="bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent">
            Vanish
          </span>
        </a>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 justify-center">
            <div className="avatar group relative flex flex-col items-center">
              <div className="w-10 rounded-full hover:cursor-pointer">
                <img src={user.photoURL} referrerPolicy="no-referrer"/>
              </div>
              <div className='group-hover:opacity-100 opacity-0'>
                <p className='absolute top-11 right-0 bg-base-300 p-1 rounded-xl truncate'>{user.displayName}</p>
              </div>
            </div>
            <button className="btn btn-error" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
