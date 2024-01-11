import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover  */}
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      {/* offered cover */}
      <SectionTitle
        subHeading={"---Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert cover  */}
      <MenuCategory
        items={dessert}
        img={dessertImg}
        title={"dessert"}
      ></MenuCategory>
      {/* pizza cover  */}
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title={"pizza"}
      ></MenuCategory>
      {/* salad cover  */}
      <MenuCategory
        items={salad}
        img={saladImg}
        title={"salad"}
      ></MenuCategory>
      {/* soup cover  */}
      <MenuCategory
        items={soup}
        img={soupImg}
        title={"soup"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
