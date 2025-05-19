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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10h20M4 10l1 11h14l1-11M2 7l7-1.204m0 0 6-1.032M9 5.796l.473-3.108 4-.688L15 4.764m0 0 7-1.204"
      />
    </svg>
  );
};
export default Pot_02;
