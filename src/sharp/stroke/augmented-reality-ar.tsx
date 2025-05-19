import React from "react";
const AugmentedRealityAr: React.FC<
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
        d="M22 3.5H2v17h20z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.99 15.035 8.414 9.08a.1.1 0 0 1 .186 0l2.38 5.955M14 11.998h2.507a1.498 1.498 0 0 0 0-2.997H14v5.997m1.504-3 2.53 3.032"
      />
    </svg>
  );
};
export default AugmentedRealityAr;
