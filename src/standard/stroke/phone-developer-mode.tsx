import React from "react";
const PhoneDeveloperMode: React.FC<
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
        d="M14 2h-4l.5 1h3zM15.5 15.5 19 12l-3.5-3.5M8.5 15.5 5 12l3.5-3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 7V3.5A1.5 1.5 0 0 0 17 2H7a1.5 1.5 0 0 0-1.5 1.5V7m0 10v3.5A1.5 1.5 0 0 0 7 22h10a1.5 1.5 0 0 0 1.5-1.5V17"
      />
    </svg>
  );
};
export default PhoneDeveloperMode;
