import React from "react";
const Flower: React.FC<
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
        d="M14.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3c2.21 0 3.998 1.917 3.998 4.127Q16.48 7 17 7a4 4 0 0 1 1.712 7.616A4 4 0 1 1 12 18.938a4 4 0 1 1-6.712-4.322 4 4 0 0 1 2.714-7.49C8.002 4.918 9.79 3 12 3Z"
      />
    </svg>
  );
};
export default Flower;
