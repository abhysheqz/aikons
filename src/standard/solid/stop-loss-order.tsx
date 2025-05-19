import React from "react";
const StopLossOrder: React.FC<
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
        d="M18.707 5.293a1 1 0 0 1 0 1.414l-3.26 3.261a4 4 0 0 1-5.478 5.478l-3.262 3.261A1 1 0 0 1 6 19H3a1 1 0 1 1 0-2h2.586l2.968-2.968a4 4 0 0 1 5.478-5.478l3.26-3.261a1 1 0 0 1 1.415 0M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m12-.01a1 1 0 1 0-2 0V12a1 1 0 1 0 2 0zm-3 .02V12a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0M3 11a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m3 .01a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1m7 .98a1 1 0 1 0-2 0V12a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StopLossOrder;
