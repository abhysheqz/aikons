import React from "react";
const IndiaGate: React.FC<
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
        d="M22 22.75H2v-2h20zM4.25 1.25h15.5V6h-1.937V3.15H6.188V6H4.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 7H2V5h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.47 5.47A.75.75 0 0 1 4 5.25h16a.75.75 0 0 1 .75.75v3.25H17v1.5h3.75V22H3.25V10.75H7v-1.5H3.25V6a.75.75 0 0 1 .22-.53M8.25 15a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v7h-1.5v-6.25h-4.5V22h-1.5zm5.25-4.25h-3v-1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default IndiaGate;
