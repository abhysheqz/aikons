import React from "react";
const ArrowTurnDown: React.FC<
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
        d="M6.5 8.5V13h-2V8.5a5.5 5.5 0 0 1 11 0v7.086h4L14.5 21l-5-5.414h4V8.5a3.5 3.5 0 1 0-7 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowTurnDown;
