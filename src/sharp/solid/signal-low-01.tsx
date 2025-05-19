import React from "react";
const SignalLow_01: React.FC<
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
      <path fill="currentColor" d="m6.5 9.5 3-4.5h-8l3 4.5V19h2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 19v-6h2v6zM12.5 17h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalLow_01;
