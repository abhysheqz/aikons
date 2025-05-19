import React from "react";
const AutomotiveBattery_01: React.FC<
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
        d="M20 5.5H4a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.5a2 2 0 0 0-2-2m-3 2.25a.75.75 0 0 1 .75.75v1.25H19a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25H15a.75.75 0 0 1 0-1.5h1.25V8.5a.75.75 0 0 1 .75-.75m-12 2a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.5 2.25a.75.75 0 0 0-.75.75v1h5V3A.75.75 0 0 0 9 2.25zM19.25 4h-5V3a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75z"
      />
    </svg>
  );
};
export default AutomotiveBattery_01;
