import React from "react";
const RotateRight_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.478 8.446 9.504 11.5l8.847-5.255c.826-.484 1.9-.229 2.4.569s.235 1.836-.59 2.32l-4.895 2.864 1.662 4.122c.928 2.35.25 3.485-1.444 4.15l-4.12 1.388c-1.371.548-3.142.579-4.116-.975l-2.81-4.487a2.81 2.81 0 0 1-.15-2.73l2.841-5.858c.276-.744 1.051-1.202 1.862-1.1.974.123 1.648 1.002 1.487 1.938M3 6c.903-1.778 2.24-2.945 4.071-3.632 1.275-.477 2.694-.462 3.988-.04.96.271 2.936 1.17 3.436 2.67M14.5 2v3.003h-2.509"
      />
    </svg>
  );
};
export default RotateRight_02;
