import React from "react";
const ArrowMoveUpRight: React.FC<
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
        d="M16.293 9.707a1 1 0 0 1 0-1.414L18.586 6l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 5h14a1 1 0 1 1 0 2H6a1 1 0 0 0-1 1v13a1 1 0 1 1-2 0V8a3 3 0 0 1 3-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowMoveUpRight;
