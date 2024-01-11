import { FaFacebookF, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-gray-800 text-neutral-content">
        <div className="footer">
          <div className="bg-slate-700 w-full p-12 pr-32">
            <div className="ms-auto text-center">
              <h2 className="font-bold text-2xl">Contact Us</h2>
              <p>
                123 ABS Street, Uni 21, Bangladesh
                <br /> 
                +88 123456789
                <br />
                Mon - Fri: 08:00 - 22:00
                <br />
                Sat - Sun: 10:00 - 23:00
              </p>
            </div>
          </div>
          <div className="w-full p-12 pl-32">
            <div className="text-center ">
              <h2 className="font-bold text-2xl">Follow US</h2>
              <p className="my-2">Join us on social media</p>
              <div className="flex justify-center">
              <FaFacebookF className="text-2xl" />
              <FaInstagram className="ml-1 mr-2 text-2xl"/>
              <FaSquareXTwitter className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 text-center bg-black">
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
