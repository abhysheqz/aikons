import React from "react";
const Lungs: React.FC<
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
        d="M7 10s1.5 1 1.974 1.995m0 0c.996 1.67.996 4.505.996 4.505 0 3.5-1.784 4.5-3.985 4.5C4.99 21 2 20.5 2 16 2 9.5 5.487 5 8.476 5c2.39 0 1.496 5 .498 6.995ZM17 10s-1.5 1-1.975 1.995m0 0c-.996 1.67-.996 4.505-.996 4.505 0 3.5 1.784 4.5 3.985 4.5.997 0 3.986-.5 3.986-5 0-6.5-3.487-11-6.477-11-2.391 0-1.493 5-.498 6.995ZM14 7l-2-1.333m0 0L10 7m2-1.333V3"
      />
    </svg>
  );
};
export default Lungs;
