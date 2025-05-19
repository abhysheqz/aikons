import React from "react";
const Crown_02: React.FC<
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
        d="M5 20.5h14M8 12.5a2 2 0 0 1-1.922-2.553L2 7.5l3 10h14l3-10-4.078 2.447A2.002 2.002 0 0 1 16 12.5a2 2 0 0 1-1.272-3.544L12 3.5 9.272 8.956A2 2 0 0 1 8 12.5Z"
      />
    </svg>
  );
};
export default Crown_02;
