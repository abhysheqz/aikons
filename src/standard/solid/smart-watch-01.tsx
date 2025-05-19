import React from "react";
const SmartWatch_01: React.FC<
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
        d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.67 3a1 1 0 0 0-.985.821L8.984 7.68a1 1 0 1 1-1.968-.358l.702-3.858A3 3 0 0 1 10.669 1h2.662a3 3 0 0 1 2.952 2.463l.701 3.858a1 1 0 1 1-1.968.358l-.701-3.858A1 1 0 0 0 13.33 3zM10.67 21a1 1 0 0 1-.985-.821l-.701-3.858a1 1 0 1 0-1.968.358l.702 3.858A3 3 0 0 0 10.669 23h2.662a3 3 0 0 0 2.952-2.463l.701-3.858a1 1 0 1 0-1.968-.358l-.701 3.858a1 1 0 0 1-.984.821z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartWatch_01;
