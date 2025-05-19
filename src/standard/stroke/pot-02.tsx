import React from "react";
const Pot_02: React.FC<
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
        d="M2 10h20M4 10l.752 8.272A3 3 0 0 0 7.74 21h8.52a3 3 0 0 0 2.988-2.728L20 10M4 8l16-4.5m-5 1.406-1.111-1.412a1 1 0 0 0-1.003-.358l-3.103.69A1 1 0 0 0 9 4.802v1.792"
      />
    </svg>
  );
};
export default Pot_02;
