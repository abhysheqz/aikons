import React from "react";
const CurvyUpDownDirection: React.FC<
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
        d="M18 13.996a.996.996 0 0 0-.996-.996H7a3 3 0 1 1 0-6h4a1 1 0 0 0 1-1V4.828l-1.293 1.293-1.414-1.414L13 1l3.707 3.707-1.414 1.414L14 4.828V6a3 3 0 0 1-3 3H7a1 1 0 1 0 0 2h10.004a2.996 2.996 0 1 1-.012 5.992l-3.988-.017a1 1 0 0 0-1.004 1v1.197l1.293-1.293 1.414 1.414L11 23l-3.707-3.707 1.414-1.414L10 19.172v-1.197a3 3 0 0 1 3.012-3l3.988.017a.996.996 0 0 0 1-.996"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CurvyUpDownDirection;
