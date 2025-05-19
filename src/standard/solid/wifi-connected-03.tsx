import React from "react";
const WifiConnected_03: React.FC<
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
        d="M10.5 20a1.5 1.5 0 0 1 1.5-1.5h.012a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5M12 14.5c1.698 0 3.477.563 4.707 1.793a1 1 0 0 1-1.414 1.414c-.77-.77-1.991-1.207-3.293-1.207s-2.523.437-3.293 1.207a1 1 0 0 1-1.414-1.414C8.523 15.063 10.302 14.5 12 14.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.86 13.232c4.36-3.633 10.146-3.659 14.303.019a1 1 0 1 1-1.326 1.498c-3.378-2.989-8.056-3.015-11.697.02a1 1 0 1 1-1.28-1.537M12.5 6.962a1 1 0 0 1-.962 1.037c-2.994.114-6.029 1.347-8.893 3.765a1 1 0 1 1-1.29-1.528c3.144-2.655 6.593-4.102 10.107-4.235a1 1 0 0 1 1.037.961M22.64 2.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiConnected_03;
