import React from "react";
const CustomerSupport: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 9c0-3.314 3.134-6 7-6s7 2.686 7 6M19 17v4h-7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.993 15.992v-5.968L4.995 9.01l-2.951 2.01a.1.1 0 0 0-.044.082v3.857a.1.1 0 0 0 .045.083l2.917 1.941a.1.1 0 0 0 .101.006zM17.007 15.982v-5.968L19.005 9l2.951 2.01a.1.1 0 0 1 .044.082v3.857a.1.1 0 0 1-.045.083l-2.917 1.941a.1.1 0 0 1-.101.006z"
      />
    </svg>
  );
};
export default CustomerSupport;
