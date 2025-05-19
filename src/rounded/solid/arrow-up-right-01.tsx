import React from "react";
const ArrowUpRight_01: React.FC<
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
        d="M17.707 6.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414-1.414l11-11a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.244 5.29c.281.082.663.225.952.514s.432.671.514.952c.09.31.15.661.192 1.014.082.709.103 1.54.097 2.314a43 43 0 0 1-.114 2.745l-.02.253v.001a1 1 0 0 1-1.993-.167l.018-.232a42 42 0 0 0 .11-2.615c.005-.742-.016-1.479-.085-2.067a5 5 0 0 0-.15-.766 5 5 0 0 0-.767-.151c-.588-.069-1.325-.09-2.066-.084a41 41 0 0 0-2.848.127 1 1 0 0 1-.168-1.993h.002a50 50 0 0 1 .918-.063c.552-.031 1.3-.065 2.08-.071.773-.006 1.605.015 2.314.097.353.041.704.101 1.014.192"
      />
    </svg>
  );
};
export default ArrowUpRight_01;
