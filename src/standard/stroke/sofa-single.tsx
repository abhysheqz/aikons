import React from "react";
const SofaSingle: React.FC<
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
        d="m7.997 18-.999 4m8.995-4 1 4M7 9l-.674-4.717A2 2 0 0 1 8.306 2h7.388a2 2 0 0 1 1.98 2.283L17 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8.5 12.5c.933-.622 2.158-1 3.5-1s2.567.378 3.5 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 9a2 2 0 0 0-1 3.732l1.293 4.542a1 1 0 0 0 .962.726h9.49a1 1 0 0 0 .962-.726L19 12.732A2 2 0 0 0 18 9a2 2 0 0 0-1.958 1.588l-.86 3.642a1 1 0 0 1-.973.77H9.79a1 1 0 0 1-.973-.77l-.86-3.642A2 2 0 0 0 6 9"
      />
    </svg>
  );
};
export default SofaSingle;
