import React from "react";
const PineTree: React.FC<
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
        d="M12.595 1.543a.75.75 0 0 0-1.19 0l-5 6.5A.75.75 0 0 0 7 9.25h.988L5.41 12.537A.75.75 0 0 0 6 13.75h1.216l-2.819 3.803A.75.75 0 0 0 5 18.75h6v3a1 1 0 1 0 2 0v-3h6a.75.75 0 0 0 .602-1.197l-2.818-3.803H18a.75.75 0 0 0 .59-1.213L16.012 9.25H17a.75.75 0 0 0 .595-1.207z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PineTree;
