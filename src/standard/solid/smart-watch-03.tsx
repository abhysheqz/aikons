import React from "react";
const SmartWatch_03: React.FC<
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
        d="M6.5 3.75A2.75 2.75 0 0 0 3.75 6.5v11a2.75 2.75 0 0 0 2.75 2.75h11a2.75 2.75 0 0 0 2.75-2.75v-11a2.75 2.75 0 0 0-2.75-2.75zm5.106 4.705c.148.06.28.129.393.196q.171-.102.393-.196c.589-.24 1.421-.348 2.348.125 1.211.619 1.755 2.068 1.402 3.486-.362 1.449-1.616 2.83-3.891 3.64a.75.75 0 0 1-.504 0c-2.275-.81-3.53-2.191-3.89-3.64-.354-1.418.19-2.867 1.4-3.486.928-.473 1.76-.365 2.35-.125M8 22a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartWatch_03;
