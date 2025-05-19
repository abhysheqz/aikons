import React from "react";
const XVariableSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM7.5 7a1 1 0 0 0 0 2h1.264a1 1 0 0 1 .894.553l1.147 2.294-2.46 2.812a1 1 0 0 1-.753.341H7a1 1 0 1 0 0 2h.592a3 3 0 0 0 2.258-1.024l1.922-2.197.78 1.563A3 3 0 0 0 15.237 17H16.5a1 1 0 1 0 0-2h-1.264a1 1 0 0 1-.894-.553l-1.147-2.294 2.46-2.812A1 1 0 0 1 16.407 9H17a1 1 0 1 0 0-2h-.593a3 3 0 0 0-2.257 1.024l-1.922 2.197-.78-1.563A3 3 0 0 0 8.763 7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default XVariableSquare;
