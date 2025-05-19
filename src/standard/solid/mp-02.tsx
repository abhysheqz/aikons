import React from "react";
const Mp_02: React.FC<
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
        d="M6.783 13.282a.75.75 0 0 1 .841.302L9 15.648l1.376-2.064A.75.75 0 0 1 11.75 14v5a.75.75 0 0 1-1.5 0v-2.523l-.626.94a.75.75 0 0 1-1.248 0l-.626-.94V19a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .533-.718M12.25 14a.75.75 0 0 1 .75-.75h1.5a2.25 2.25 0 1 1 0 4.5h-.75V19a.75.75 0 0 1-1.5 0zm1.5 2.25h.75a.75.75 0 0 0 0-1.5h-.75zm4.25-3a.75.75 0 0 1 .75.75v1.75h1.5V14a.75.75 0 1 1 1.5 0v5a.75.75 0 0 1-1.5 0v-1.75H18a.75.75 0 0 1-.75-.75V14a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H7a2 2 0 0 1-2-2v-5a2 2 0 0 1 1.975-2H19.75V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.168A2.924 2.924 0 0 0 2.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mp_02;
