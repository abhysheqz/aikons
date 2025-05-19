import React from "react";
const Tv_02: React.FC<
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
        d="M1.25 5.875A3.75 3.75 0 0 1 5 2.125h14a3.75 3.75 0 0 1 3.75 3.75v10a3.75 3.75 0 0 1-3.75 3.75H5a3.75 3.75 0 0 1-3.75-3.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.447 17.98a1 1 0 0 1 .448 1.342l-1 2a1 1 0 1 1-1.79-.894l1-2a1 1 0 0 1 1.342-.448m11.106 0a1 1 0 0 1 1.342.448l1 2a1 1 0 1 1-1.79.894l-1-2a1 1 0 0 1 .448-1.341"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tv_02;
