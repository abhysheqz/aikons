import React from "react";
const Car_04: React.FC<
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
        d="M2.98 13.289c-.979 1.768-.979 4.211-.979 4.211h1.98m-1-4.211C3 10 3.5 7 6 4.5h7.001c3.5 2 4.5 4.5 4.5 4.5l4.5 3v5.5h-2m-17.02-4.211S4 11.5 6 11.5m9.996 6h-8.01M8 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM17.5 9h-9V4.5M8 11.5h1.5"
      />
    </svg>
  );
};
export default Car_04;
