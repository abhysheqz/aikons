import React from "react";
const Navigation_05: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m12.443-4.523L10.96 8.602c-.825.34-1.237.509-1.544.815-.306.307-.476.72-.815 1.543l-1.125 2.733c-.844 2.05-1.266 3.074-.755 3.585.51.511 1.536.09 3.585-.755l2.733-1.125c.824-.34 1.236-.509 1.543-.816s.476-.718.815-1.543l1.125-2.732c.844-2.05 1.266-3.074.755-3.585-.51-.511-1.536-.09-3.585.755M13 12a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigation_05;
