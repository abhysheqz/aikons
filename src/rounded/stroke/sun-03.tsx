import React from "react";
const Sun_03: React.FC<
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
        d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 2v1.5m0 17V22m7.07-2.929-1.06-1.06M5.99 5.989 4.928 4.93M22 12h-1.5m-17 0H2m17.071-7.071-1.06 1.06M5.99 18.011l-1.06 1.06"
      />
    </svg>
  );
};
export default Sun_03;
