import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

import img1 from "../../assets/slider1.webp";
import img2 from "../../assets/slider2.webp";
import img3 from "../../assets/slider3.webp";
import img4 from "../../assets/slider4.webp";

import Home from "../../Pages/Home/Home";
import { foods } from "../../Pages/Product/Products";

const sliderImages: any = [img1, img2, img3, img4];

export default function MUISlider() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Unique categories (including "All")
  const uniqueCategories: any[] = [
    "All",
    ...Array.from(
      new Map(foods.map((item: any) => [item.category, item])).values()
    ),
  ];

  const products =
    selectedCategory == "All"
      ? foods
      : foods.filter((product: any) => product.category == selectedCategory);
  console.log(products);

  const handleCateClick = (category: any) => {
    const name = typeof category === "string" ? category : category.category;
    setSelectedCategory(name);
    console.log("Selected Category:", name);
  };

  return (
    <div className="w-full">
      {/* Slider */}
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
        >
          {sliderImages.map((imgSrc: any, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={imgSrc}
                alt={`slide${index + 1}`}
                className="w-full h-[250px] sm:h-[620px] object-fill"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Categories */}
      {/* Categories */}
      <div className="sticky top-0 z-50 bg-amber-300 w-full overflow-x-auto no-scrollbar flex md:justify-center justify-start items-center gap-10 px-3 py-3 shadow-md">
        {uniqueCategories.map((category: any, index: number) => {
          const name =
            typeof category === "string" ? category : category.category;
          const image = typeof category === "string" ? null : category.image;
          const isActive = selectedCategory === name;

          return (
            <button
              key={index}
              onClick={() => handleCateClick(category)}
              className="flex flex-col items-center min-w-[70px] sm:min-w-[90px]"
            >
              <div
                className={`flex flex-col items-center p-2 sm:p-3 rounded-xl justify-center cursor-pointer transition-all duration-300 shadow-sm
            ${
              isActive
                ? "bg-amber-900 text-white scale-105"
                : " hover:bg-amber-800 hover:text-white"
            }`}
              >
                {image && (
                  <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mb-1 border border-gray-200"
                  />
                )}
                <p className="font-medium text-xs sm:text-sm text-center px-1 truncate w-full">
                  {name}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="h-auto" />
      <Home product={products} />
    </div>
  );
}
