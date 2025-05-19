import React from "react";
const Curling: React.FC<
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
        d="M2 15h10M22 17v-4a3 3 0 0 0-2.386-2.937c-.371-.077-.721-.277-.89-.616l-1.342-2.683A5 5 0 0 0 12.91 4H7.5a1.5 1.5 0 1 0 0 3h4a2 2 0 0 1 2 2v1H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3"
      />
    </svg>
  );
};
export default Curling;
