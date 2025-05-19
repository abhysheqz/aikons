import React from "react";
const DollarSend_02: React.FC<
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
        d="m19 14.5 2.5-2.5L19 9.5M15.5 12h5.391M7.5 3v18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.083 8.63C12.083 6.625 10.031 5 7.5 5S2.917 6.625 2.917 8.63s1.25 3.11 4.583 3.11 5 1.038 5 3.63c0 2.593-2.083 3.63-5 3.63s-5-1.5-5-3.5"
      />
    </svg>
  );
};
export default DollarSend_02;
