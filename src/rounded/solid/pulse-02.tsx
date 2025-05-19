import React from "react";
const Pulse_02: React.FC<
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
        d="M14.591 6.004a1 1 0 0 1 .89.8l1.428 7.142 1.197-2.393A1 1 0 0 1 19 11h3a1 1 0 1 1 0 2h-2.382l-2.224 4.447a1 1 0 0 1-1.875-.25l-1.34-6.702-.75 1.876A1 1 0 0 1 12.5 13h-1.382l-1.224 2.447a1 1 0 0 1-1.836-.11l-1.58-4.428-.542 1.442A1 1 0 0 1 5 13H2a1 1 0 1 1 0-2h2.307l1.257-3.351a1 1 0 0 1 1.878.015l1.712 4.793.452-.904A1 1 0 0 1 10.5 11h1.323l1.749-4.371a1 1 0 0 1 1.02-.625"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pulse_02;
