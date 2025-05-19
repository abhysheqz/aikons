import React from "react";
const AdobeAfterEffect: React.FC<
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
        d="M19.5 2.5a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 16-1.125-3M6 16l1.125-3m0 0L9 8l1.875 5m-3.75 0h3.75M14 12.87V14a2 2 0 0 0 3.736.994M14 12.87V12a2 2 0 1 1 4 0v.87z"
      />
    </svg>
  );
};
export default AdobeAfterEffect;
