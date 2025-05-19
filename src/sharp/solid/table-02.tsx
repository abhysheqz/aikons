import React from "react";
const Table_02: React.FC<
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
        d="M1.25 20.19 3.558 5.007H2.217V3.5h19.567v1.508h-1.342L22.75 20.19l-1.933.31-1.634-10.75H4.817L3.183 20.5z"
      />
    </svg>
  );
};
export default Table_02;
