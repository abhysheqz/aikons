import React from "react";
const AiScan: React.FC<
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
        d="M21.5 7.5v-3a2 2 0 0 0-2-2h-3m5 14v3a2 2 0 0 1-2 2h-3m-14-5v3a2 2 0 0 0 2 2h3m-5-14v-3a2 2 0 0 1 2-2h3M12 8.5v-2m-2 5v.5m4-.5v.5m-5 4.5h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2"
      />
    </svg>
  );
};
export default AiScan;
