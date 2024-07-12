// import React, { useState, useEffect } from "react";
// import brand1 from "../../../assets/brand1.png";
// import brand2 from "../../../assets/brand2.png";
// import brand3 from "../../../assets/brand3.png";

// const images = [brand1, brand2, brand3];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-64 overflow-hidden bg-red-500">
//       <div
//         className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 pb-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-gray-800" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
