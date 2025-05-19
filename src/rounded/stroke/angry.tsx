import React from "react";
const Angry: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17a5 5 0 0 1 4-2c1.636 0 3.088.786 4 2M7 9.01s1.41-.127 2.196.498m0 0-.263.835c-.104.329.167.657.543.657.396 0 .657-.357.453-.665a3.6 3.6 0 0 0-.733-.827M17 9.011s-1.41-.128-2.196.497m0 0 .263.835c.104.329-.167.657-.543.657-.396 0-.657-.357-.453-.665a3.6 3.6 0 0 1 .733-.827"
      />
    </svg>
  );
};
export default Angry;
