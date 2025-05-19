import React from "react";
const MapsGlobal_02: React.FC<
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
        d="M17 1.25c-3.154 0-5.75 2.485-5.75 5.598 0 1.786.75 3.175 2.139 4.357.863.734 2.398 2.284 2.978 3.197a.75.75 0 0 0 1.253.02c.624-.916 2.142-2.495 2.991-3.217 1.39-1.182 2.139-2.57 2.139-4.357 0-3.113-2.596-5.598-5.75-5.598m0 8a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.205 12q0 .444.043.878c.973-.427 3.414-1.033 5.395-.049.457.184 1.57.722 2.649 1.509.766.644 2.57 2.006 3.657 2.3.786.273 2.719.765 4.157.546A8.8 8.8 0 0 0 20.567 14h1.997c-.937 4.981-5.31 8.75-10.564 8.75-5.937 0-10.75-4.813-10.75-10.75 0-5.254 3.769-9.627 8.75-10.564v1.997A8.8 8.8 0 0 0 3.205 12"
      />
    </svg>
  );
};
export default MapsGlobal_02;
