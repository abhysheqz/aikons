import React from "react";
const FourCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-.542 6.038a1 1 0 0 0-1.916-.575l-1.481 4.939A1.436 1.436 0 0 0 9.436 13.5H14V17a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v4.5h-3.806z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FourCircle;
