import React from "react";
const DeliveryBox_02: React.FC<
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
        d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 .75.75v5.75H1.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.2 7.25v12.567h15.6V7.25h1.95v13.533a.97.97 0 0 1-.975.967H3.225a.98.98 0 0 1-.69-.283.96.96 0 0 1-.285-.684V7.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 12h-5v-2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryBox_02;
