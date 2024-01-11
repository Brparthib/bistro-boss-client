import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegTrashCan, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (user) => {};

  return (
    <div className="w-10/12 mt-10">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <div>
        <SectionTitle
          subHeading={"---How many??---"}
          heading={"Manage all users"}
        ></SectionTitle>
      </div>
      <div className="p-12 bg-white">
        <div className="uppercase flex justify-between items-center">
          <h2 className="text-2xl">Total Users: {users?.length}</h2>
        </div>
        <div className="overflow-x-auto rounded rounded-t-lg mt-6">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role == "admin" ? (
                      "admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="bg-[#D1A054] text-white p-2 rounded"
                      >
                        <FaUsers className="w-5 h-5" />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
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

export default AllUsers;
