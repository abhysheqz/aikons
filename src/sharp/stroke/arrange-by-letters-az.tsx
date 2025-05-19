import React from "react";
const ArrangeByLettersAz: React.FC<
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
        d="M4 14h5l-4 7h5M4 10l2.5-7h1l2.5 7M17.5 4v15.254M15 17.5l2.5 2.5 2.5-2.5"
      />
    </svg>
  );
};
export default ArrangeByLettersAz;
