import React from "react";
const ArrowTurnUp: React.FC<
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
        d="M6.5 15.5V11h-2v4.5a5.5 5.5 0 1 0 11 0V8.414h4L14.5 3l-5 5.414h4V15.5a3.5 3.5 0 1 1-7 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowTurnUp;
