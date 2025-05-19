import React from "react";
const Sushi_02: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M15 14.75a5.75 5.75 0 1 1 0-11.5 5.75 5.75 0 0 1 0 11.5M16.25 9a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M15 6.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.97 12.758a1 1 0 0 1-.727 1.212l-20 5a1 1 0 1 1-.486-1.94l20-5a1 1 0 0 1 1.213.728"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.243 1.03a1 1 0 0 1 .727 1.213l-3.625 14.5a1 1 0 1 1-1.94-.485l3.625-14.5a1 1 0 0 1 1.213-.728M6.844 18.624a1 1 0 0 1 .728 1.212l-.602 2.407a1 1 0 1 1-1.94-.485l.601-2.407a1 1 0 0 1 1.213-.727"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sushi_02;
