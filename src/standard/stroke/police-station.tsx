import React from "react";
const PoliceStation: React.FC<
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
        d="M8 7H7a1 1 0 0 0-1 1v14h12V8a1 1 0 0 0-1-1h-1M6 12H3a1 1 0 0 0-1 1v9h4m12-10h3a1 1 0 0 1 1 1v9h-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 4c1.5 0 3.5-1.5 4-2 .5.5 2.5 2 4 2 0 2 0 5-4 7-4-2-4-5-4-7M12 22v-3.5M9.5 15h1m3 0h1"
      />
    </svg>
  );
};
export default PoliceStation;
