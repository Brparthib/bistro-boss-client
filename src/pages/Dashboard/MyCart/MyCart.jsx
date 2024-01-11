import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-10/12 mt-10">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div>
        <SectionTitle
          subHeading={"---My Cart---"}
          heading={"Wanna Add More?"}
        ></SectionTitle>
      </div>
      <div className="p-12 bg-white">
        <div className="uppercase flex justify-between items-center">
          <h2 className="text-2xl">Total Items: {cart?.length}</h2>
          <h2 className="text-2xl">Total Price: ${total}</h2>
          <button className="btn hover:bg-[#D1A054] hover:text-white">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto rounded rounded-t-lg mt-6">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id} className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-12 h-12 object-fill"
                      src={item.image}
                      alt="item img"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-rose-600 text-white p-2 rounded"
                    >
                      <FaRegTrashCan className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
