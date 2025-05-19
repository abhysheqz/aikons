import React from "react";
const ContainerTruck_01: React.FC<
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
        d="M13.875 6.375a1 1 0 0 1 1-1c4.494 0 8 3.301 8 7.5v4.5a1 1 0 0 1-1 1h-1.828a1 1 0 1 1 0-2h.828v-3.5c0-2.981-2.494-5.5-6-5.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.875 15.875a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M6.875 15.875a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.125 4.875c0-.966.784-1.75 1.75-1.75h11c.966 0 1.75.784 1.75 1.75v9.23a3.5 3.5 0 0 0-2.17 4.02h-3.16q.079-.364.08-.75a3.5 3.5 0 1 0-6.921.743l-.57.002a1.75 1.75 0 0 1-1.759-1.75zm5.25 1.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ContainerTruck_01;
