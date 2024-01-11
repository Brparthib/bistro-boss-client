import { FaRegTrashCan } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log(item._id);
          if (res.data.deletedCount > 0) {
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
          subHeading={"---Hurry Up!---"}
          heading={"Manage All Items"}
        ></SectionTitle>
      </div>
      <div className="p-12 bg-white">
        <div className="uppercase flex justify-between items-center">
          <h2 className="text-2xl">Total Items: {menu?.length}</h2>
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
              {menu.map((item, index) => (
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

export default ManageItems;
