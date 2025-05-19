import React from "react";
const MoneyNotFound_01: React.FC<
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
        d="M10.068 9.703a3 3 0 1 0 4.226 4.226l5.815 5.815q-.054.005-.109.006H4A2.75 2.75 0 0 1 1.25 17V7A2.75 2.75 0 0 1 4 4.25h.615zM2.75 17c0 .69.56 1.25 1.25 1.25h1.93a4 4 0 0 0-3.18-3.18zM4 5.75c-.69 0-1.25.56-1.25 1.25v1.93a4 4 0 0 0 3.18-3.18zM20 4.25A2.75 2.75 0 0 1 22.75 7v10c0 .622-.21 1.193-.558 1.654l-1.082-1.082c.089-.172.14-.366.14-.572v-1.93a4 4 0 0 0-1.795.846L7.79 4.25zm-1.93 1.5a4 4 0 0 0 3.18 3.18V7c0-.69-.56-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.543 2.545a1 1 0 0 1 1.414 0l17.5 17.5a1 1 0 0 1-1.414 1.414l-17.5-17.5a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
};
export default MoneyNotFound_01;
