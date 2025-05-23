import React from "react";
const StartUp_01: React.FC<
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
        d="M14 9a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14.5 19c-.557 2.227-2.51 3-2.51 3s-1.932-.773-2.49-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 17h10M7 17H2s-.029-4.492 4.072-5.036M7 17c-.544-1.86-.835-3.535-.928-5.036M17 17h5s.124-4.147-4.039-5.026M17 17c.57-1.85.87-3.523.961-5.026m0 0C18.325 6 14 2.5 12 2c-2 .5-6.298 4-5.928 9.964"
      />
    </svg>
  );
};
export default StartUp_01;
