import React from "react";
const ArrangeByLettersZa: React.FC<
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
        d="M17.5 4v15.54M15 17.5l2.5 2.5 2.5-2.5M4 3h5l-4 7h5M4 21l2.5-7h1l2.5 7"
      />
    </svg>
  );
};
export default ArrangeByLettersZa;
