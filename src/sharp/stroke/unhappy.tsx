import React from "react";
const Unhappy: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17c.836-.628 1.874-1 3-1s2.164.372 3 1M7 8.01s1.41-.127 2.196.498m0 0-.263.835c-.104.329.167.657.543.657.396 0 .657-.357.453-.665a3.6 3.6 0 0 0-.733-.827ZM14 8.011s1.41-.128 2.196.497m0 0-.263.835c-.104.329.167.657.543.657.396 0 .657-.357.453-.665a3.6 3.6 0 0 0-.733-.827Z"
      />
    </svg>
  );
};
export default Unhappy;
