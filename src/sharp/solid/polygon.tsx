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
        fill="currentColor"
        d="M7.19 1.25h9.62l5.94 5.94v9.62l-5.94 5.94H7.19l-5.94-5.94V7.19z"
      />
    </svg>
  );
};
export default Polygon;
