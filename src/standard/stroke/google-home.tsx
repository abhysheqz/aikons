import React from "react";
const GoogleHome: React.FC<
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
        d="M11.991 21.002c5.46 0 9.872-4.321 10.01-9.791 0-3.145-.857-5.391-3.756-7.97a.98.98 0 0 0-.65-.243H6.318a.94.94 0 0 0-.575.188c-2.362 1.806-3.744 4.752-3.744 7.95 0 5.47 4.533 9.866 9.992 9.866Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 2.998c0 1.49 2.5 3 6 3s6-1.51 6-3"
      />
    </svg>
  );
};
export default GoogleHome;
