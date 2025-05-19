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
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 4.251H2.25v-2h19.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.75 16.401 7.834 5.222a.75.75 0 0 0 .832 0L20.25 16.4V2.251H3.75zM12 6.5l1.35 3.15h3.15l-2.25 2.475 1.125 3.375L12 13.7l-3.375 1.8 1.125-3.375L7.5 9.65h3.15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HonourStar;
