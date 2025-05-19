import React from "react";
const SwipeRight_08: React.FC<
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
        d="M13 12.855V11a1.5 1.5 0 0 0-1.5-1.5H10m6 4V12a1.5 1.5 0 0 0-1.5-1.5h-1.267M10 9.5v2.421M10 9.5v-5a1.5 1.5 0 1 0-3 0v5m9.324 2H17.5A1.5 1.5 0 0 1 19 13v6a3 3 0 0 1-3 3H8.606a3 3 0 0 1-2.497-1.336l-2.605-3.908A3 3 0 0 1 3 15.092v-.35a3 3 0 0 1 .879-2.12L7 9.5m0 5v-5M21 4.5 18.5 2M21 4.5 18.5 7M21 4.5h-6"
      />
    </svg>
  );
};
export default SwipeRight_08;
