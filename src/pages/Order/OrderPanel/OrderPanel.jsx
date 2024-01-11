import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderPanel = ({ items }) => {
  return (
    <div className="mt-10 w-9/12 mx-auto my-16">
      <div className="grid grid-cols-3 gap-5">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderPanel;
