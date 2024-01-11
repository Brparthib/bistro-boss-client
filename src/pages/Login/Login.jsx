import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginIMG from "../../assets/others/authentication2.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/socialLogin/socialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;

    if (validateCaptcha(captcha) == true) {
      signIn(email, password).then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully logged in",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(from, { replace: true });
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Captcha Did not Match!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }

    console.log(email, password);
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 p-12">
        <div className="hero-content bg-slate-200 rounded-lg shadow-lg py-10">
          <div className="text-center lg:text-left w-6/12">
            <img src={loginIMG} alt="" />
          </div>
          <div className="card shrink-0 w-5/12 rounded-none">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  placeholder="type the text above"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center">
              New here?
              <Link className="text-blue-500" to="/signup">
                {" "}
                Create An Account
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
