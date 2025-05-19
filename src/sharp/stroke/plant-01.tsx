import React from "react";
const Plant_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 10s-6 4-6 11M9.349 11.183a4.114 4.114 0 0 1-5.37-.388C1.555 8.372 2.039 3.04 2.039 3.04s5.333-.485 7.756 1.939a4.1 4.1 0 0 1 1.16 3.521"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14.964 12.818a3.656 3.656 0 0 1 .107-5.06c2.154-2.154 6.894-1.723 6.894-1.723s.43 4.74-1.724 6.894a3.65 3.65 0 0 1-2.741 1.068M6 7s6 5 6 14"
      />
    </svg>
  );
};
export default Plant_01;
