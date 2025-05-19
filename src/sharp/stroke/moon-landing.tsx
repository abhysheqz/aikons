import React from "react";
const MoonLanding: React.FC<
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
        strokeWidth={1.5}
        d="M12 12C6.477 12 2 16.477 2 22h20c0-5.523-4.477-10-10-10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h.009"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 22a3 3 0 1 0-6 0" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 12V7.5m0 0V2h8v5.5z"
      />
    </svg>
  );
};
export default MoonLanding;
