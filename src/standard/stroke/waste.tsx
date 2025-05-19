import React from "react";
const Waste: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.25 19a3 3 0 1 0-6 0 3 3 0 0 0 6 0M19.75 5l-.735 11.584M5.25 5l.883 14.125A2 2 0 0 0 8.129 21h6.621M3.25 5l6.312-.02m0 0 2.39-2.65a1 1 0 0 1 .743-.33h5.281a1 1 0 0 1 .968.75l.579 2.23m-9.961 0h9.96m-.007-.026.008.027m0 0L21.25 5"
      />
    </svg>
  );
};
export default Waste;
