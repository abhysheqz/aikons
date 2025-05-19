import React from "react";
const Cap: React.FC<
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
        d="m2.5 17-.442-1.974C1.425 9.136 6.056 4 12 4s10.575 5.136 9.942 11.026L21.5 17"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.016 11C7.813 7.795 9.598 4 12 4m4 7c.203-3.205-1.582-7-3.984-7M12 4V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 17.01c-8-2.486-11-2.867-19 0L4 22s4-2 8-2 8 2 8 2z"
      />
    </svg>
  );
};
export default Cap;
