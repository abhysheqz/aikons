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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 15.308 8.692 7 5 9.77l3.692 1.845.462 3.231 3.23.462L14.232 19zM16.5 14.5l4.756-4.513a1 1 0 0 0 .018-1.433l-5.828-5.828a1 1 0 0 0-1.433.019L9.5 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 11-3.293 3.293a1 1 0 0 0 0 1.414l5.586 5.586a1 1 0 0 0 1.414 0L13 18M18 6l-5 5m-1-6 7 7"
      />
    </svg>
  );
};
export default Chocolate;
