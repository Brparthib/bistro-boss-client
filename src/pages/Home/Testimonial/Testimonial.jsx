import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="p-24">
      <SectionTitle
        subHeading={"---What our client say---"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper text-center mt-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center px-44">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className="text-8xl text-black" />
              <p className="mt-4">{review.details}</p>
              <span className="text-xl text-amber-500 mt-4">{review.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
