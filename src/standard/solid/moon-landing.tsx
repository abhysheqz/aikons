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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 22c0-5.937 4.813-10.75 10.75-10.75S22.75 16.063 22.75 22a.75.75 0 0 1-.75.75h-9.25V22a3.75 3.75 0 1 0-7.5 0v.75H2a.75.75 0 0 1-.75-.75m5.5.75h4.5V22a2.25 2.25 0 0 0-4.5 0zM14 17a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 2a1 1 0 0 1 1-1h7a2 2 0 0 1 2 2v2.994a2 2 0 0 1-2 2h-6V12a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoonLanding;
