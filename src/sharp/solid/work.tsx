import React from "react";
const Work: React.FC<
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
        d="M16.75 2.25h-9.5v4h-6v15.5h21.5V6.25h-6zm-1.5 4v-2.5h-6.5v2.5zm-9.743 3.813 1.368.424c1.644.509 3.384.764 5.125.764h.002c1.74 0 3.48-.255 5.125-.764l1.368-.425.444 1.433-1.368.424a18.8 18.8 0 0 1-4.82.817v2.015h-1.5v-2.015a18.8 18.8 0 0 1-4.82-.817l-1.368-.424z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Work;
