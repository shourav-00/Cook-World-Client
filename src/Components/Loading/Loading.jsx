import Lottie from "lottie-react";


const Loading = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
     <span className="loading loading-dots loading-xl"></span>
    </div>
  );
};

export default Loading;