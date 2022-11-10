import React from "react";
import discount from '.././../../Assets/BannerImages/discont.json';
import LottieAnimation from "../../../Lottie";
import { FaArrowRight } from "react-icons/fa";
const BannerSection = () => {
  return (
    <div>
      <div className={`p-6 py-12 bg-gradient-to-r from-yellow-400 to-orange-500  text-white font-bold `}>
        <div className="container mx-auto">
        
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <LottieAnimation lotti={discount} height={200} width={200}></LottieAnimation>
           
            <h2 className="text-center text-9xl tracking-tighter font-bold">
              Up to 50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus Special Soup is free!</span>
              <div className="flex justify-center items-center">
              <span className="font-bold text-lg">visit services</span>
              <FaArrowRight></FaArrowRight>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
