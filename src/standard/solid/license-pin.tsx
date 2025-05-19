import React from "react";
const LicensePin: React.FC<
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
        d="M1.75 4A2.75 2.75 0 0 1 4.5 1.25h13A2.75 2.75 0 0 1 20.25 4v8H16.5a2 2 0 0 0-1.961 2.392l.348 1.742-1.102 1.837A2 2 0 0 0 15.5 21h1v1.75h-12A2.75 2.75 0 0 1 1.75 20zM7 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h5.5a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.92 13.525a.75.75 0 0 1 .58-.275h4a.75.75 0 0 1 .735.897l-.443 2.216 1.351 2.251a.75.75 0 0 1-.643 1.136h-2.25V22a.75.75 0 0 1-1.5 0v-2.25H15.5a.75.75 0 0 1-.643-1.136l1.35-2.251-.442-2.216a.75.75 0 0 1 .155-.623"
      />
    </svg>
  );
};
export default LicensePin;
