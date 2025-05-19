import React from "react";
const HoldLocked_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 4.948V3.5a1.5 1.5 0 0 0-3 0v1m3 .448v6.389m0-6.389A1.5 1.5 0 0 1 17 5v6.337m-3-6.389V5m6 6.416V7.5a1.5 1.5 0 0 0-3 0M12 21H9.096a2 2 0 0 1-1.685-.923l-4.14-6.48a1.683 1.683 0 0 1 2.423-2.26L8.001 13.5v-9a1.5 1.5 0 1 1 3 0m0 0v6.837"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 17v-1.5a1.5 1.5 0 0 0-3 0V17M15 17h6v5h-6z"
      />
    </svg>
  );
};
export default HoldLocked_02;
