import React from "react";
const Acceleration: React.FC<
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
        d="M2.646 8.339a.75.75 0 0 1 .77.037l18 12A.75.75 0 0 1 21 21.75H3a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .396-.661"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4.15a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7M4.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M15.018 9.136l3.85 2.246-.316-1.108 1.923-.55 1.275 4.462-4.462 1.275-.549-1.923 1.246-.356-3.975-2.319z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Acceleration;
