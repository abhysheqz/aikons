import React from "react";
const CurvyLeftDirection: React.FC<
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
        d="M10.004 6a.996.996 0 0 0-.996 1l.017 3.988a3 3 0 0 1-3 3.012H2a1 1 0 1 1 0-2h4.025a1 1 0 0 0 1-1.004l-.017-3.988A2.996 2.996 0 1 1 13 6.996V17a1 1 0 1 0 2 0v-4a3 3 0 0 1 3-3h4a1 1 0 1 1 0 2h-4a1 1 0 0 0-1 1v4a3 3 0 0 1-6 0V6.996A.996.996 0 0 0 10.004 6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.707 10.293a1 1 0 0 1 0 1.414L3.414 13l1.293 1.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CurvyLeftDirection;
