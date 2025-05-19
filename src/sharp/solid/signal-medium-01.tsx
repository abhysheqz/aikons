import React from "react";
const SignalMedium_01: React.FC<
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
      <path fill="currentColor" d="M6 9.5 9 5H1l3 4.5V19h2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 19v-5h2v5zM12 19v-8h2v8zM16 19v-9h2v9zM20 17h2v2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalMedium_01;
