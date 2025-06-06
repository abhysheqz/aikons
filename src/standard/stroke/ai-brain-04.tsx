import React from "react";
const AiBrain_04: React.FC<
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
        d="M7 4.5a3 3 0 0 0-2.567 4.554 3.001 3.001 0 0 0 0 5.893M7 4.5a2.5 2.5 0 0 1 5 0v15a2.5 2.5 0 0 1-5 0 3 3 0 0 1-2.567-4.553M7 4.5c0 .818.393 1.544 1 2m-3.567 8.447A3 3 0 0 1 6 13.67M20 5l-2 2h-2.5M20 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2M20 12h-4.5m4.5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2M20 19l-2-2h-2.5m4.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      />
    </svg>
  );
};
export default AiBrain_04;
