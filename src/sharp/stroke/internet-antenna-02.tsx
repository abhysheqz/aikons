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
      <circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 18.001A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 2.252-.744 4.33-2 6.001"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.528 16a6 6 0 1 1 8.944 0M12 14v5"
      />
      <path
        fill="currentColor"
        d="M10 19v-.75h-.178l-.158.08zm4 0 .334-.67-.158-.08H14zm2 3v.75a.75.75 0 0 0 .75-.75zm-8 0h-.75c0 .414.335.75.75.75zm0-2-.336-.67-.415.207V20zm8 0h.75v-.464l-.415-.207zm-6-.25h4v-1.5h-4zM8.75 22v-2h-1.5v2zm.914-3.67-2 1 .67 1.34 2-1zm4 1.34 2 1 .671-1.34-2-1zM16 21.25H8v1.5h8zM15.25 20v2h1.5v-2z"
      />
    </svg>
  );
};
export default InternetAntenna_02;
