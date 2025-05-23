import React from "react";
const Timer_01: React.FC<
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
        d="m14.078 1.407.058.012a10.77 10.77 0 0 1 8.614 10.559c0 5.947-4.81 10.772-10.75 10.772S1.25 17.925 1.25 11.978c0-3.013 1.235-5.738 3.224-7.692a.977.977 0 1 1 1.37 1.394 8.8 8.8 0 0 0-2.64 6.298c0 4.872 3.94 8.818 8.796 8.818s8.796-3.946 8.796-8.818a8.815 8.815 0 0 0-7.047-8.644 16 16 0 0 0-.509-.097 3 3 0 0 0-.233-.03c-.027.177-.03.439-.03.935v.98a.977.977 0 0 1-1.954 0v-1.04c0-.422 0-.849.057-1.203.07-.422.237-.866.659-1.212.396-.325.83-.424 1.257-.417.34.007.724.085 1.082.157"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.526 6.418a.75.75 0 0 1 .939-.007l5.42 4.28a2.268 2.268 0 0 1 .011 3.555 2.297 2.297 0 0 1-3.486-.758L7.33 7.336a.75.75 0 0 1 .196-.918"
      />
    </svg>
  );
};
export default Timer_01;
