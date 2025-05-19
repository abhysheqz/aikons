import React from "react";
const WifiConnected_02: React.FC<
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
        d="M4.86 10.732c4.36-3.633 10.146-3.659 14.303.019a1 1 0 1 1-1.326 1.498c-3.378-2.989-8.056-3.015-11.697.02a1 1 0 1 1-1.28-1.537"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3c3.695 0 7.338 1.443 10.645 4.236a1 1 0 0 1-1.29 1.528C18.346 6.224 15.147 5 12 5S5.654 6.223 2.645 8.764a1 1 0 0 1-1.29-1.528C4.662 4.443 8.305 3 12 3M16.14 13.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2-2a1 1 0 1 1 1.414-1.414l1.226 1.226 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiConnected_02;
