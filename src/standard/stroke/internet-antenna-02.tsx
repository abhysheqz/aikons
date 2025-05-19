import React from "react";
const InternetAntenna_02: React.FC<
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
      <circle
        cx={12}
        cy={12}
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
        d="M4 18.001A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 2.252-.744 4.33-2 6.001"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.528 16a6 6 0 1 1 8.944 0M12 14v5M13.546 19h-3.092c-.299 0-.593.07-.86.203A2.88 2.88 0 0 0 8 21.783V22h8v-.217a2.88 2.88 0 0 0-1.594-2.58 1.9 1.9 0 0 0-.86-.203"
      />
    </svg>
  );
};
export default InternetAntenna_02;
