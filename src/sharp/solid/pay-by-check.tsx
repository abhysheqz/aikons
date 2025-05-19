import React from "react";
const PayByCheck: React.FC<
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
        d="M3 11.25h3.75v5.999l6.682.003 6.002-6.002H21a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75m12 7.5h4v-1.5h-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.963 2.47a.75.75 0 0 1 1.06 0L21.53 5.97a.75.75 0 0 1 0 1.061l-8.72 8.72-4.56-.002v-4.567z"
      />
    </svg>
  );
};
export default PayByCheck;
