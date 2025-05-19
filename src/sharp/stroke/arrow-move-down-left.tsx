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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.983 13.059 5 17.029 8.983 21M19 3v13.91c0 .055-.045.12-.1.12H5.352"
      />
    </svg>
  );
};
export default ArrowMoveDownLeft;
