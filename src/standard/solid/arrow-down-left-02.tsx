import React from "react";
const ArrowDownLeft_02: React.FC<
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
        d="M6.684 10.051a1 1 0 0 1 1.023.242l6 6a1 1 0 0 1-.566 1.697l-7 1a1 1 0 0 1-1.131-1.131l1-7a1 1 0 0 1 .674-.808"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.705 5.293a1 1 0 0 1 0 1.414l-7.998 8a1 1 0 1 1-1.414-1.414l7.997-8a1 1 0 0 1 1.415 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDownLeft_02;
