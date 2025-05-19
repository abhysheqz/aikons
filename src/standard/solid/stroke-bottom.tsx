import React from "react";
const StrokeBottom: React.FC<
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
        d="M7 4a1 1 0 0 0-1 1v12a1 1 0 1 1-2 0V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v12a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1zM21 22H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeBottom;
