import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className="mb-16">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-2 w-10/12 mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="uppercase btn text-primary block mx-auto">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
