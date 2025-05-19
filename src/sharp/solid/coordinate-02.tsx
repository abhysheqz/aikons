import React from "react";
const Coordinate_02: React.FC<
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
        d="M11.896 2.543 13.19 1.25l1.415 1.414-1.708 1.707v2.086h-2V4.371L9.19 2.664l1.415-1.414zM3 13.75H1.5v-2H5a1 1 0 0 1 .8 1.6L4 15.75h1.5v2H2a1 1 0 0 1-.8-1.6zM18.879 14.75l-1.293-1.293L19 12.043l1.293 1.293 1.293-1.293L23 13.457l-1.293 1.293L23 16.043l-1.414 1.414-1.293-1.293L19 17.457l-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.896 15.383V7.918h2v7.465l8.555 5.703-1.11 1.664-8.445-5.63-8.445 5.63-1.11-1.664z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Coordinate_02;
