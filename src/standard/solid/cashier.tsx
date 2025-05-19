import React from "react";
const Cashier: React.FC<
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
        d="M10.25 3a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-1.5v2a1 1 0 1 1-2 0V4h-1.5a1 1 0 0 1-1-1M3.75 14.25A2.75 2.75 0 0 0 1 17v3a2.75 2.75 0 0 0 2.75 2.75h16A2.75 2.75 0 0 0 22.5 20v-3a2.75 2.75 0 0 0-2.75-2.75zm5.836 3.08a.75.75 0 0 0-.671 1.341l1 .5a.75.75 0 0 0 .335.08h3a.75.75 0 0 0 .336-.08l1-.5a.75.75 0 0 0-.671-1.342l-.842.421h-2.646z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.807 7.696A2.75 2.75 0 0 1 6.54 5.25h10.42a2.75 2.75 0 0 1 2.733 2.446l.565 5.084a4 4 0 0 0-.508-.03h-16a4 4 0 0 0-.508.03zm3.943.554a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cashier;
