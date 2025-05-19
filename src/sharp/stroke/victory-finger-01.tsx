import React from "react";
const VictoryFinger_01: React.FC<
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
        d="M8.537 13.014 6.892 4.177c-.174-.97.408-1.994 1.383-2.131.926-.131 1.84.415 1.99 1.3l1.224 6.734 1.244-6.734c.195-.944 1.14-1.506 2.08-1.3.933.205 1.477 1.27 1.273 2.203l-1.127 5.76c2.32.677 3.368 1.367 4.083 2.289 1.01 1.64.1 3.767-.722 5.722-.487.94-.934 1.827-1.018 1.992 0 .734.009 1.995.009 1.995m-9.331-.02v-1.44C1.57 13.831 5.5 13.04 7.793 10.01"
      />
    </svg>
  );
};
export default VictoryFinger_01;
