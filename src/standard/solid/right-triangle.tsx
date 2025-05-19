import React from "react";
const RightTriangle: React.FC<
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
        d="M2.997 4.42C2.995 2.635 5.15 1.74 6.411 3l14.593 14.583c1.259 1.259.37 3.41-1.409 3.415l-3.092.007a1 1 0 0 1-.005-2L19.59 19 4.997 4.416 5.002 7.5a1 1 0 1 1-2 .003zM1 10.995a1 1 0 0 1 1-1h.994a2 2 0 0 1 2 2V14H7a3 3 0 0 1 3 3v1.996h1.998a2 2 0 0 1 2 2v1.004a1 1 0 1 1-2 0v-1.004H4.994a2 2 0 0 1-2-2v-6.999H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RightTriangle;
