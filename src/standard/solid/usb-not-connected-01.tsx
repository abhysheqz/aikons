import React from "react";
const UsbNotConnected_01: React.FC<
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
        d="M13.168 10.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 1 1 1.414 1.414L18.29 14l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414L15.46 14l-2.293-2.293a1 1 0 0 1 0-1.414M5.375 3a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3h-2V3h-5v3h-2zM9.875 15.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-5.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.125 6.5c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v4.02l-1.023-1.022a2.183 2.183 0 0 0-3.088 3.088l1.237 1.235-1.68 1.597a2.18 2.18 0 0 0-.62 1.83l-.117.002H8.416a2.75 2.75 0 0 1-2.253-1.173l-2.54-3.63a2.75 2.75 0 0 1-.498-1.577zm5.75 1a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbNotConnected_01;
