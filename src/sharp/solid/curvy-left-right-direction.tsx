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
        d="M13.996 6a.996.996 0 0 0-.996.996V17a3 3 0 0 1-6 0v-4a1 1 0 0 0-1-1H4.828l1.293 1.293-1.414 1.414L1 11l3.707-3.707 1.414 1.414L4.828 10H6a3 3 0 0 1 3 3v4a1 1 0 1 0 2 0V6.996a2.996 2.996 0 1 1 5.992.012l-.017 3.988a1 1 0 0 0 1 1.004h1.197l-1.293-1.293 1.414-1.414L23 13l-3.707 3.707-1.414-1.414L19.172 14h-1.197a3 3 0 0 1-3-3.012L14.992 7a.996.996 0 0 0-.996-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CurvyLeftRightDirection;
