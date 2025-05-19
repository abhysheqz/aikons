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
        d="M18.5 7c0-2.357 0-3.536-.732-4.268C17.035 2 15.857 2 13.5 2h-3c-2.357 0-3.536 0-4.268.732S5.5 4.643 5.5 7m13 10c0 2.357 0 3.535-.732 4.268C17.035 22 15.857 22 13.5 22h-3c-2.357 0-3.536 0-4.268-.732C5.5 20.535 5.5 19.357 5.5 17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2h-4l.5 1h3zM15.5 15.5S19 12.922 19 12s-3.5-3.5-3.5-3.5M8.5 15.5S5 12.922 5 12s3.5-3.5 3.5-3.5"
      />
    </svg>
  );
};
export default PhoneDeveloperMode;
