import React from "react";
const Gpu: React.FC<
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
        d="M2.125 2.25c-.483 0-.875.437-.875.975s.392.975.875.975H3v16.575c0 .539.392.975.875.975s.875-.436.875-.975V3.225c0-.538-.392-.975-.875-.975zm7.411 16H6v-14h14A2.75 2.75 0 0 1 22.75 7v10.5A2.75 2.75 0 0 1 20 20.25h-9a.75.75 0 0 1-.67-.415zm5.214-6.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M17 7.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-9.25.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gpu;
