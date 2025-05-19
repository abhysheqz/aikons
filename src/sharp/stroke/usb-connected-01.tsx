import React from "react";
const UsbConnected_01: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M13.5 5.5V2h-7v3.5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 16.5V22M8.5 8.5h3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m11.5 13 2.5 2.5 6-6" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.999 9.039v-3.44a.1.1 0 0 0-.1-.099H4.1a.1.1 0 0 0-.1.1v5.89l3.019 5.01h4.476"
      />
    </svg>
  );
};
export default UsbConnected_01;
