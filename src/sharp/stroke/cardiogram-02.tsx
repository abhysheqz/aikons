import React from "react";
const Cardiogram_02: React.FC<
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
        strokeWidth={1.5}
        d="M18.858 3.745C14.866 1.604 12 4.76 12 4.76S9.134 1.604 5.142 3.745C.307 6.338-.04 16.492 12 21c12.04-4.508 11.693-14.662 6.858-17.255Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 13h-3l-2.5-4-3 5L6 11H2"
      />
    </svg>
  );
};
export default Cardiogram_02;
