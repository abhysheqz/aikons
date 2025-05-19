import React from "react";
const Pi: React.FC<
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
        d="m16.5 5.5-.995 13.275C15.425 19.98 16.41 21 17.657 21c1.054 0 1.954-.739 2.127-1.747L20 18M10 6c-.133 3.063-.4 8.75-.8 10.5S8 20 6 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9.5a4.566 4.566 0 0 1 4.531-4H18c1.486 0 3-1 3-2.5"
      />
    </svg>
  );
};
export default Pi;
