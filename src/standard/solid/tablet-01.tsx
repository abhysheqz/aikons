import React from "react";
const Tablet_01: React.FC<
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
        d="M6.5 1.25A3.75 3.75 0 0 0 2.75 5v14a3.75 3.75 0 0 0 3.75 3.75h11A3.75 3.75 0 0 0 21.25 19V5a3.75 3.75 0 0 0-3.75-3.75zM12 18a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tablet_01;
