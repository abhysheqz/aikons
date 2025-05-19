import React from "react";
const Cashier: React.FC<
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
        d="M20 14.5H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m20 14.5-.802-7.22A2 2 0 0 0 17.21 5.5H6.79a2 2 0 0 0-1.988 1.78L4 14.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 2.5H14m2.5 0H14m0 0v3M9.5 17.5l1 .5h3l1-.5M8 8.5h2"
      />
    </svg>
  );
};
export default Cashier;
