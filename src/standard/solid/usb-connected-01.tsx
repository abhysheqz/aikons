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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.375 3a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3h-2V3h-5v3h-2zM9.875 15.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-5.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.625 6.5v2.778l-2.082 2.499-.973-.973a2.164 2.164 0 1 0-3.061 3.061l2.649 2.649.023.023a2.75 2.75 0 0 1-1.847.713H8.416a2.75 2.75 0 0 1-2.253-1.173l-2.54-3.63a2.75 2.75 0 0 1-.498-1.577V6.5c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75m-7.75 1a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.515 8.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbConnected_01;
