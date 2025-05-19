import React from "react";
const WifiError_01: React.FC<
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
        d="M13.503 12.043a1.75 1.75 0 0 0-3.001 0l-4.234 7.056c-.7 1.167.14 2.65 1.5 2.65h8.468c1.36 0 2.2-1.483 1.5-2.65zM12.75 15.5a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM12 17.75a.75.75 0 0 0 0 1.5h.012a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.86 9.232c4.36-3.633 10.146-3.659 14.303.02a1 1 0 1 1-1.326 1.497c-3.378-2.989-8.056-3.015-11.697.02a1 1 0 1 1-1.28-1.537"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c3.695 0 7.338 1.443 10.645 4.236a1 1 0 1 1-1.29 1.528C18.346 5.224 15.147 4 12 4S5.654 5.223 2.645 7.764a1 1 0 0 1-1.29-1.528C4.662 3.443 8.305 2 12 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiError_01;
