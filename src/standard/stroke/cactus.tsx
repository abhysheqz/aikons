import React from "react";
const Cactus: React.FC<
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
        strokeWidth={1.5}
        d="m9.982 15-1.45-7.037A3.494 3.494 0 0 1 12 4a3.494 3.494 0 0 1 3.467 3.963L13.975 15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15v-3"
      />
      <path
        fill="currentColor"
        d="M17.335 5.67a.75.75 0 1 0-.67-1.34zm-10-1.34a.75.75 0 0 0-.67 1.34zM12.75 2a.75.75 0 0 0-1.5 0zm3.915 9.67a.75.75 0 1 0 .67-1.34zm-10-1.34a.75.75 0 1 0 .67 1.34zm8.67-3.66 2-1-.67-1.34-2 1zm-6-1.34-2-1-.67 1.34 2 1zM12.75 4V2h-1.5v2zm1.915 6.67 2 1 .67-1.34-2-1zm-6-1.34-2 1 .67 1.34 2-1z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.914 20.545 1.22-4.27A1 1 0 0 0 16.174 15h-8.35a1 1 0 0 0-.962 1.273l1.212 4.268a2 2 0 0 0 1.923 1.454h3.995a2 2 0 0 0 1.923-1.45"
      />
    </svg>
  );
};
export default Cactus;
