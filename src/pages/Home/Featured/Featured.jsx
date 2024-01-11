import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import moment from "moment";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured py-20 text-white">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-8 px-24">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>{moment().format("MMMM D, YYYY")}</p>
          <h3>WHERE CAN I GET SOME?</h3>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="uppercase btn text-primary mt-5">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
