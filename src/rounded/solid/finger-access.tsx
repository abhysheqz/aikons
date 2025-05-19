import React from "react";
const FingerAccess: React.FC<
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
        d="M12 7a5 5 0 0 0-5 5c0 3.037.889 5.01 2.78 7.375a1 1 0 0 1-1.561 1.25C6.111 17.99 5 15.59 5 12a7 7 0 1 1 14 0 1 1 0 1 1-2 0 5 5 0 0 0-5-5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4a8 8 0 0 0-7.802 9.779 1 1 0 1 1-1.95.442A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a4 4 0 0 1-8 0 2 2 0 1 0-4 0c0 .719.107 1.928.83 3.357.722 1.428 2.09 3.134 4.707 4.8a1 1 0 0 1-1.074 1.687c-2.883-1.835-4.515-3.8-5.418-5.584C8.143 14.478 8 12.938 8 12a4 4 0 1 1 8 0 2 2 0 1 0 4 0 8 8 0 0 0-8-8"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.995 11.9a1 1 0 1 0-1.99.2c.364 3.636 2.82 5.835 4.443 6.91.453.298.88.535 1.171.682.141.071.394.184.494.229l.015.007a1 1 0 0 0 .743-1.857c-.239-.12-.93-.472-1.32-.73-1.408-.933-3.28-2.676-3.556-5.44"
      />
    </svg>
  );
};
export default FingerAccess;
