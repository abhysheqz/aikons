import React from "react";
const Tired_02: React.FC<
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
        r={10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8 8 1.5 1.452L8 11m8-3-1.5 1.452L16 11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 13.5c1.673 0 3.11.956 3.73 2.32.25.552.375.828.159 1.055-.217.227-.598.116-1.362-.105-.723-.21-1.625-.4-2.527-.4s-1.804.19-2.527.4c-.764.221-1.145.332-1.362.105-.216-.227-.091-.503.16-1.055.62-1.364 2.056-2.32 3.729-2.32"
      />
    </svg>
  );
};
export default Tired_02;
