import React from "react";
const DiagonalScrollPoint_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M10 19.883s-4.76.427-5.535-.348C3.69 18.759 4.117 14 4.117 14M14 4.117s4.76-.427 5.535.348c.775.776.348 5.535.348 5.535"
      />
    </svg>
  );
};
export default DiagonalScrollPoint_01;
