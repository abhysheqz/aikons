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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.017 13.059 19 17.029 15.017 21M5 3v13.91c0 .055.045.12.1.12h13.47"
      />
    </svg>
  );
};
export default ArrowMoveDownRight;
