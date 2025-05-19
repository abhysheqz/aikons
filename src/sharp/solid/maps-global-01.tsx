import React from "react";
const MapsGlobal_01: React.FC<
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
        d="M3.205 12q0 .444.043.877c.973-.426 3.414-1.032 5.395-.048.457.184 1.57.722 2.649 1.509.766.644 2.57 2.005 3.657 2.3.786.273 2.719.765 4.157.546A8.8 8.8 0 0 0 20.567 14h1.997c-.937 4.981-5.31 8.75-10.564 8.75-5.937 0-10.75-4.813-10.75-10.75 0-5.254 3.769-9.627 8.75-10.564v1.997A8.8 8.8 0 0 0 3.205 12"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.272 14.148c.272.152.5.268.661.347l.567.255.567-.255a14.215 14.215 0 0 0 2.658-1.698C21.157 11.631 22.75 9.8 22.75 7.37c0-3.392-2.811-6.119-6.25-6.119s-6.25 2.727-6.25 6.12c0 2.429 1.593 4.261 3.025 5.427.73.594 1.456 1.047 1.997 1.35M16.5 9.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MapsGlobal_01;
