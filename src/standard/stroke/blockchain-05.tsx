import React from "react";
const Blockchain_05: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 5.5 12 2l6.5 3.5m-13 0v7L12 16M5.5 5.5 12 9m0 7 6.5-3.5v-7M12 16V9m6.5-3.5L12 9M9.5 20.5V22h5v-1.5m-5 0V19h5v1.5m-5 0H5m9.5 0H19"
      />
    </svg>
  );
};
export default Blockchain_05;
