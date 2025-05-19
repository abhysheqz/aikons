import React from "react";
const Crown_03: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M5 20.5h14M19 17.5H5l-3-10 5.5 3 4.5-7 4.5 7 5.5-3z"
      />
    </svg>
  );
};
export default Crown_03;
