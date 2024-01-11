import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            recipe,
            image: imgURL,
            category,
            price: parseFloat(price),
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item ", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 2000,
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
          subHeading={"---What's new?---"}
          heading={"Add An Item"}
        ></SectionTitle>
      </div>
      <div className="p-12 bg-slate-200">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered"
            />
          </div>
          <div className="flex justify-between">
            <div className="form-control mb-3 w-6/12 mr-3">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="Pick One"
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>Category</option>
                <option>pizza</option>
                <option>soup</option>
                <option>salad</option>
                <option>drinks</option>
              </select>
            </div>
            <div className="form-control mb-3 w-6/12 ml-3">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              type="text"
              {...register("recipe", { required: true })}
              placeholder="Recipe Details"
              className="textarea textarea-bordered"
            ></textarea>
          </div>
          <div className="mt-5 mb-10">
            <input
              type="file"
              {...register("image", { required: true })}
              placeholder="You can't touch this"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <input type="submit" value="Add Item" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
