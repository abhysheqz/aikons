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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 21v-3a2 2 0 0 1 2-2h4a2 2 0 1 0 0-4H6.996a1.996 1.996 0 1 1 .008-3.992l3.988.017a2 2 0 0 0 2.008-2V3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m10 5 3-3 3 3M8 19l3 3 3-3"
      />
    </svg>
  );
};
export default CurvyUpDownDirection;
