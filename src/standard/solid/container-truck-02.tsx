import React from "react";
const ContainerTruck_02: React.FC<
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
        d="M16.875 15.875a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M6.875 15.875a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.875 6.375a1 1 0 0 1 1-1h2.93A3 3 0 0 1 20.3 6.711l2.07 3.105a3 3 0 0 1 .504 1.664v5.895a1 1 0 0 1-1 1h-2.5a1 1 0 1 1 0-2h1.5V11.48a1 1 0 0 0-.168-.554l-2.07-3.106a1 1 0 0 0-.833-.445h-2.929a1 1 0 0 1-1-1"
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
export default ContainerTruck_02;
