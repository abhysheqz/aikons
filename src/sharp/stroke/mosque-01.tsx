import React from "react";
const Mosque_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 12V9h-12v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 12h-16v10h16z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 22v-3c-.017-3 2.5-4 2.5-4s2.517 1 2.5 4v3M9.897 3.757c.408-.36 1.963-1.215 2.594-1.762.535.473 2.277 1.449 2.587 1.745.31.295 3.306 2.035 1.135 5.272H8.755c-2.011-3.274.63-4.803 1.142-5.255Z"
      />
    </svg>
  );
};
export default Mosque_01;
