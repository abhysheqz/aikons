import React from "react";
const ArrowMoveDownLeft: React.FC<
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
        d="m7.828 17.293 2.293 2.293L8.707 21 4 16.293l4.707-4.707L10.121 13l-2.293 2.293H18V3h2v13.293a1 1 0 0 1-1 1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowMoveDownLeft;
