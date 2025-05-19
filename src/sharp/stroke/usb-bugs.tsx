import React from "react";
const UsbBugs: React.FC<
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
        d="M14.5 10V7.5h-10V17a5 5 0 0 0 5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7.5V2H6v5.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 4.5h2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.682 13.778c.194-.237 1.183-1.117 1.818-1.278m-8.182 1.278c-.194-.237-1.183-1.117-1.818-1.278m8.182 5.722c.194.237 1.183 1.117 1.818 1.278m-8.182-1.278c-.194.237-1.183 1.117-1.818 1.278m8.182-3.5H19.5m-8.182 0H9.5m5 4c-1.757 0-3.182-1.393-3.182-3.111V15.11c0-1.718 1.425-3.111 3.182-3.111s3.182 1.393 3.182 3.111v1.778c0 1.718-1.425 3.111-3.182 3.111Z"
      />
    </svg>
  );
};
export default UsbBugs;
