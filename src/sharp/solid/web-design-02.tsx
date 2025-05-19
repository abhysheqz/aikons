import React from "react";
const WebDesign_02: React.FC<
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
        d="M8 12.25a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zm6.03 3.78-1.06-1.06-2.53 2.53 2.53 2.53 1.06-1.06-1.47-1.47zm1.94 0 1.47 1.47-1.47 1.47 1.06 1.06 2.53-2.53-2.53-2.53z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.225 1.25a.974.974 0 0 0-.975.972v15.556c0 .537.437.972.975.972H5.15v-1.944H3.2V6.75h15.6V10h1.95V2.222a.974.974 0 0 0-.975-.972z"
      />
    </svg>
  );
};
export default WebDesign_02;
