import React from "react";
const PoundSquare: React.FC<
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
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.988 10.237c0-1.882-1.724-3.033-3.492-2.634-2.2.592-2.254 2.88-1.818 3.803.667 1.287 1.67 1.514 2.329 1.578-1.46-.2-.961 2.083-3.551 3.473a.01.01 0 0 0 .004.02h5.985c.62 0 1.381-.378 1.571-.56m-8.084-2.933h5.419"
      />
    </svg>
  );
};
export default PoundSquare;
