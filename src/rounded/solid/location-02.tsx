import React from "react";
const Location_02: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.997 7.085C4.525 3.513 8.175 1.25 12.002 1.25c3.826 0 7.476 2.263 9.004 5.835 1.42 3.32.653 6.151-.948 8.576-1.328 2.011-3.271 3.802-5.019 5.412q-.467.43-.908.841a3.12 3.12 0 0 1-2.13.836c-.79 0-1.554-.297-2.129-.835l-.001-.002c-.31-.293-.634-.591-.963-.896-1.73-1.6-3.646-3.372-4.96-5.357-1.603-2.423-2.373-5.251-.95-8.575"
      />
    </svg>
  );
};
export default Location_02;
