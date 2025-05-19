import React from "react";
const Doctor_03: React.FC<
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
        d="M20 22v-3c0-2.828 0-4.242-.879-5.121C18.243 13 16.828 13 14 13l-2 2-2-2c-2.828 0-4.243 0-5.121.879S4 16.172 4 19v3M15.5 6.5v-1a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 1 0 7 0M16 16v3m1.5-1.5h-3"
      />
    </svg>
  );
};
export default Doctor_03;
