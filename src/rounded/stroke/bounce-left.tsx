import React from "react";
const BounceLeft: React.FC<
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
        d="M9 10c2.115 3.01 3.105 7.153 3.752 10.086.131.596.197.895.335.913s.28-.265.561-.833c1.346-2.708 4.135-5.104 6.352-3.058"
      />
      <circle
        cx={2}
        cy={2}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        transform="matrix(-1 0 0 1 8 3)"
      />
    </svg>
  );
};
export default BounceLeft;
