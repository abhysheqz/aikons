import React from "react";
const StrokeRight: React.FC<
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
        d="M2 7a3 3 0 0 1 3-3h12a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3zM20.998 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeRight;
