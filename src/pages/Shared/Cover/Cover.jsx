import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax blur={0} bgImage={img} bgImageAlt="the menu" strength={200} className="mb-12">
      <div className="hero min-h-[700px]">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center text-neutral-content bg-black py-12 w-7/12 bg-opacity-70">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
