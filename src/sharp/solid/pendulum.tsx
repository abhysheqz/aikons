import React from "react";
const Pendulum: React.FC<
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
        d="M6.25 21.75a3.24 3.24 0 0 0 2.5-1.173 3.25 3.25 0 1 0 3.5-5.17V4.25h3.674l1.951 11.2A3.251 3.251 0 0 0 19 21.75a3.25 3.25 0 0 0 .898-6.374L17.96 4.25h1.79v-2h-18v2h3.5v11.157a3.252 3.252 0 0 0 1 6.343m4-6.343a3.26 3.26 0 0 0-1.5 1.016 3.26 3.26 0 0 0-1.5-1.016V4.25h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pendulum;
