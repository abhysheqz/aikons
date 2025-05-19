import React from "react";
const FitToScreen: React.FC<
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
        d="M3 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M21 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.086 8.293a1 1 0 0 1 0 1.414l-.879.879-.412.414h8.41q-.18-.184-.412-.414l-.878-.879a1 1 0 1 1 1.414-1.414l.922.922c.462.463.878.878 1.17 1.26.317.416.58.908.58 1.525s-.263 1.109-.58 1.525c-.292.382-.707.797-1.17 1.26l-.922.922a1 1 0 0 1-1.415-1.414l.88-.879.411-.414h-8.41l.412.414.879.879a1 1 0 1 1-1.414 1.414l-.922-.922c-.463-.463-.879-.878-1.17-1.26C5.262 13.11 5 12.617 5 12s.262-1.109.58-1.525c.291-.382.707-.797 1.17-1.26l.922-.922a1 1 0 0 1 1.414 0"
      />
    </svg>
  );
};
export default FitToScreen;
