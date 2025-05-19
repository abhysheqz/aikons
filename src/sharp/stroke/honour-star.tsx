import React from "react";
const HonourStar: React.FC<
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
        d="M2.5 3.001h19"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.5 3v12.98l7.436 5.003a.1.1 0 0 0 .112 0l7.452-5.002V3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.909 7.076a.1.1 0 0 1 .185-.001L13.21 9.83l2.715-.04a.1.1 0 0 1 .075.167l-1.956 2.087.993 2.907a.1.1 0 0 1-.146.119L12 13.369l-2.916 1.696a.1.1 0 0 1-.143-.123l1.12-2.897L8.01 9.877a.1.1 0 0 1 .077-.168l2.749.122z"
      />
    </svg>
  );
};
export default HonourStar;
