import React from "react";
const LowSignal: React.FC<
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
        d="M16.25 4.25h4.5v15.5h-4.5zm1.5 1.5v12.5h1.5V5.75zM9.75 7.25h4.5v12.5h-4.5zm1.5 1.5v9.5h1.5v-9.5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M3.25 11.25h4.5v8.5h-4.5z" />
    </svg>
  );
};
export default LowSignal;
