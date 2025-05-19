import React from "react";
const Chocolate: React.FC<
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
        d="M17 16 8 7l-4 3 4 2 .5 3.5 3.5.5 2 4z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16 15 6-6-7-7-6 6M6 11l-4 4 7 7 4-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.5 5.5-6 6M12 5l7 7"
      />
    </svg>
  );
};
export default Chocolate;
