import React from "react";
const CallMissed_01: React.FC<
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
        strokeWidth={1.5}
        d="m3.777 11.981 4.211-3.969-2.983-6.008A.01.01 0 0 0 4.99 2C2.825 3.716 1.8 5.554 2.032 7.168c.303 2.105 1.497 5.424 4.631 8.702 1.128 1.352 3.118 3.149 5.42 4.392m0 0c2.413 1.302 5.172 2.544 7.507 1.077.515-.323 1.912-1.576 2.396-2.295a.01.01 0 0 0-.004-.014l-5.985-3.011zM22 3.99l-5.006 4.992a.01.01 0 0 1-.014 0l-4.612-4.628m-.326 3.15V4.027H15.5"
      />
    </svg>
  );
};
export default CallMissed_01;
