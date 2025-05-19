import React from "react";
const Caravan: React.FC<
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
        d="M19 18h2a1 1 0 0 0 1-1v-1m-3 2v-8a6 6 0 0 0-6-6H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4m12 0h-8"
      />
      <circle
        cx={9}
        cy={18}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7H5v5h7z"
      />
    </svg>
  );
};
export default Caravan;
