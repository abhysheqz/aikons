import React from "react";
const Aids: React.FC<
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
        d="M7.04 4.076 20 16l-3.989 6-8.78-11.833C4.11 5.98 7.368 2 12.026 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.976 2c4.658 0 7.913 3.981 4.793 8.167L15.402 12m1.52-7.968L11.978 9m0 7.596L7.987 22 4 16l4.592-4"
      />
    </svg>
  );
};
export default Aids;
