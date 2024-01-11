const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  
  return (
    <div className="mb-24 md:flex items-center">
      <img className="w-[100px] h-[100px] rounded-r-full rounded-bl-full" src={image} alt="" />
      <div className="col-span-2 ml-5">
        <div className="flex justify-between">
          <h3>{name}----------</h3>
          <span className="mr-6 text-amber-500">${price}</span>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
