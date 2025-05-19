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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.693 7.477 10.96 8.602c-.825.34-1.237.509-1.544.815-.306.307-.476.72-.815 1.543l-1.125 2.733c-.844 2.05-1.266 3.074-.755 3.585.51.511 1.536.09 3.585-.755l2.733-1.125c.824-.34 1.236-.509 1.543-.816s.476-.718.815-1.543l1.125-2.732c.844-2.05 1.266-3.074.755-3.585-.51-.511-1.536-.09-3.585.755"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12v.01"
      />
    </svg>
  );
};
export default Navigation_05;
