import React from "react";
const Cupcake_02: React.FC<
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
        strokeWidth={1.5}
        d="M7.885 9.176A3.98 3.98 0 0 0 5 13m2.885-3.824c1.97-.563 6.142-.925 6.942-3.169M7.885 9.176C7.885 5 12 6 12 2c2.047 0 3.503 2.11 2.827 4.007m0 0c1.627-.14 2.717 1.731 1.858 3.071m0 0c-.274.427-.724.775-1.185 1.041m1.185-1.04C18.642 9.534 19 11.293 19 13"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 22h10l1.658-3.341c.587-1.181 1.342-2.348 1.342-3.71 0-2.599-4-2.599-4 0 0-2.599-4-2.599-4 0 0-2.599-4-2.599-4 0 0-2.599-4-2.599-4 0 0 1.362.755 2.529 1.342 3.71z"
      />
    </svg>
  );
};
export default Cupcake_02;
