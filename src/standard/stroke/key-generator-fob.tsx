import React from "react";
const KeyGeneratorFob: React.FC<
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
        d="M16 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12 5v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 22a7 7 0 0 0 7-7c0-2.87-1.102-8.643-1.67-11.428A1.97 1.97 0 0 0 15.39 2H8.61a1.97 1.97 0 0 0-1.94 1.572C6.102 6.356 5 12.13 5 15a7 7 0 0 0 7 7Z"
      />
    </svg>
  );
};
export default KeyGeneratorFob;
