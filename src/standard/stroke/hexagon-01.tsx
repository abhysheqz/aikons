import React from "react";
const Hexagon_01: React.FC<
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
        d="m20.486 6.714-8-4.444a1 1 0 0 0-.972 0l-8 4.444A1 1 0 0 0 3 7.588v8.824a1 1 0 0 0 .514.874l8 4.444a1 1 0 0 0 .972 0l8-4.444a1 1 0 0 0 .514-.874V7.588a1 1 0 0 0-.514-.874Z"
      />
    </svg>
  );
};
export default Hexagon_01;
