import React from "react";
const HierarchySquare_10: React.FC<
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
        d="M7 22v-4H2v4zM22 22v-4h-5v4zM19.5 18v-4.5h-5M4.5 18v-4.5h5M12 7v4M16 7V2H8v5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
};
export default HierarchySquare_10;
