import React from "react";
const Star: React.FC<
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
        d="M14.533 9.138 12 2.5 9.467 9.138l-6.967.34 5.278 4.633-1.93 7.389L12 17.278l6.151 4.222-1.929-7.389L21.5 9.478z"
      />
    </svg>
  );
};
export default Star;
