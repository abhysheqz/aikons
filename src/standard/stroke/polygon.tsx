import React from "react";
const Polygon: React.FC<
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
        d="M6.914 2.586 2.586 6.914A2 2 0 0 0 2 8.328v7.344a2 2 0 0 0 .586 1.414l4.328 4.328A2 2 0 0 0 8.328 22h7.344a2 2 0 0 0 1.414-.586l4.328-4.328A2 2 0 0 0 22 15.672V8.328a2 2 0 0 0-.586-1.414l-4.328-4.328A2 2 0 0 0 15.672 2H8.328a2 2 0 0 0-1.414.586Z"
      />
    </svg>
  );
};
export default Polygon;
