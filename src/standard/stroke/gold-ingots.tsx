import React from "react";
const GoldIngots: React.FC<
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
        d="m7 9 1.072-3.575A2 2 0 0 1 9.988 4h4.024a2 2 0 0 1 1.916 1.425L17 9M3.621 13.515l-1.31 5.243A1 1 0 0 0 3.28 20h8.438a1 1 0 0 0 .97-1.242l-1.31-5.243A2 2 0 0 0 9.439 12H5.561a2 2 0 0 0-1.94 1.515M17 20h3.72a1 1 0 0 0 .97-1.242l-1.311-5.243A2 2 0 0 0 18.439 12H15"
      />
    </svg>
  );
};
export default GoldIngots;
