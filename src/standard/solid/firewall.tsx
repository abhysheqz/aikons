import React from "react";
const Firewall: React.FC<
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
        d="M1.25 17.25h9.998v-4H4A2.75 2.75 0 0 0 1.25 16zm0 1.5V20A2.75 2.75 0 0 0 4 22.75h2.248v-4zm6.498 4h8.5v-4h-8.5zm10 0H20A2.75 2.75 0 0 0 22.75 20v-1.25h-5.002zm5.002-5.5V16A2.75 2.75 0 0 0 20 13.25h-7.252v4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.92 6.612c.093.48.338 1.176.738 1.702-.29-1.715.153-3.247.747-4.417a9.8 9.8 0 0 1 1.932-2.589l.063-.057.005-.004a1 1 0 0 1 1.644.585c.013.055.05.204.092.328.085.247.238.624.507 1.088.537.924 1.547 2.216 3.425 3.533.816.572 1.523 1.245 2.036 1.94.496.67.891 1.47.891 2.279a1 1 0 0 1-1 1H5.001a1 1 0 0 1-1-.982c-.038-2.101.924-3.3 1.765-4.346q.196-.242.377-.478a1 1 0 0 1 1.778.418"
      />
    </svg>
  );
};
export default Firewall;
