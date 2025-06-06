import React from "react";
const Cashback: React.FC<
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
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2C7.9 2 4.375 4.468 2.832 8M2 4.5l.5 4 4-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.727 10.061c-.1-.763-.973-1.995-2.545-1.995-1.826 0-2.595 1.013-2.75 1.52-.244.678-.195 2.071 1.945 2.223 2.676.19 3.748.506 3.611 2.147-.136 1.64-1.627 1.995-2.806 1.957s-3.107-.58-3.182-2.04M11.995 6.5v1.57m0 7.833V17.5"
      />
    </svg>
  );
};
export default Cashback;
