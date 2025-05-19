import React from "react";
const SignalLowMedium: React.FC<
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
        d="M16.5 17h2v2h-2zm4 0h2v2h-2z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="m6.5 9.5 3-4.5h-8l3 4.5V19h2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 19v-5h2v5zM12.5 19v-8h2v8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalLowMedium;
