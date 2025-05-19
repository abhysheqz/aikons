import React from "react";
const AirplaneLanding_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.992 19.985H22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m3.325 3.985 3.056.151a.01.01 0 0 1 .01.01l.354 3.306 9.016 1.24c3.271.735 4.767 3.44 5.171 5.473.144.972.058 1.149-.083 1.358-.22.328-.591.614-1.434.344l-6.32-1.835-2.231 1.643a.01.01 0 0 1-.009.001l-4.827-1.208a.01.01 0 0 1-.004-.018L8.6 12.388 2.004 10.01A.01.01 0 0 1 1.997 10l1.317-6.007a.01.01 0 0 1 .01-.008Z"
      />
    </svg>
  );
};
export default AirplaneLanding_01;
