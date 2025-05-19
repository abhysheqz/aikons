import React from "react";
const ArrowShrink_02: React.FC<
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
        strokeWidth={1.5}
        d="M13.505 4.479v6.017h6.018M10.496 19.522v-6.017H4.478"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.969 14.032 2.999 21M21 3 14.032 9.97"
      />
    </svg>
  );
};
export default ArrowShrink_02;
