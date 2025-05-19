import React from "react";
const MirroringScreen: React.FC<
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
        d="M4 21a2 2 0 0 0-2-2m6 2a6 6 0 0 0-6-6m10 6c0-5.523-4.477-10-10-10"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 20h7V3H3v5"
      />
    </svg>
  );
};
export default MirroringScreen;
