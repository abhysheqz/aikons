import React from "react";
const CapStraight: React.FC<
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
        d="M2 11.75a3 3 0 0 1 5.83-1H21.5v2H7.83a3.001 3.001 0 0 1-5.83-1m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 4A2.75 2.75 0 0 0 4.5 6.75v.78q.245-.03.5-.03c1.522 0 2.855.8 3.606 2H21.5V4.75a.75.75 0 0 0-.75-.75zM21.5 14H8.606A4.25 4.25 0 0 1 4.5 15.97v.78a2.75 2.75 0 0 0 2.75 2.75h13.5a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  );
};
export default CapStraight;
