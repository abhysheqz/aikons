import React from "react";
const ArrowMoveDownRight: React.FC<
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
        d="M4 2a1 1 0 0 1 1 1v13a1 1 0 0 0 1 1h14a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.293 14.293a1 1 0 0 0 0 1.414L18.586 18l-2.293 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowMoveDownRight;
