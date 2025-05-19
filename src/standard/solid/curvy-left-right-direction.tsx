import React from "react";
const CurvyLeftRightDirection: React.FC<
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
        d="M13.996 6a.996.996 0 0 0-.996.996V17a3 3 0 0 1-6 0v-4a1 1 0 0 0-1-1H2a1 1 0 1 1 0-2h4a3 3 0 0 1 3 3v4a1 1 0 0 0 2 0V6.996a2.996 2.996 0 1 1 5.992.012l-.017 3.988a1 1 0 0 0 1 1.004H22a1 1 0 1 1 0 2h-4.025a3 3 0 0 1-3-3.012L14.992 7a.996.996 0 0 0-.996-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.293 10.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L20.586 13l-1.293-1.293a1 1 0 0 1 0-1.414M4.707 8.293a1 1 0 0 1 0 1.414L3.414 11l1.293 1.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CurvyLeftRightDirection;
