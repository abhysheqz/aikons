import React from "react";
const GoldIngots: React.FC<
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
        d="M3.785 11.776a.75.75 0 0 1 .715-.526h7a.75.75 0 0 1 .716.526l2.5 8a.75.75 0 0 1-.716.974H2a.75.75 0 0 1-.715-.974zM13.622 11.25l2.526 8.079c.147.47.134.968-.026 1.421H22a.75.75 0 0 0 .716-.974l-2.5-8a.75.75 0 0 0-.716-.526zM8.5 3.25a.75.75 0 0 0-.716.526L5.917 9.75h12.166l-1.867-5.974a.75.75 0 0 0-.716-.526z"
      />
    </svg>
  );
};
export default GoldIngots;
