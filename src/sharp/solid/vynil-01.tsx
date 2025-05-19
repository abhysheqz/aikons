import React from "react";
const Vynil_01: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m8.116-5.069a4.3 4.3 0 0 0-2.433 2.433L5.07 8.636a6.3 6.3 0 0 1 3.568-3.568zM12 14.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Vynil_01;
