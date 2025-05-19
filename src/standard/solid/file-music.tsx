import React from "react";
const FileMusic: React.FC<
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
        d="M17.242 13.27a.75.75 0 0 1 .84.43c.1.222.4.84.813 1.389.206.275.421.505.631.661.211.158.368.204.475.204a.75.75 0 1 1 0 1.5c-.541 0-1.007-.23-1.371-.5a4 4 0 0 1-.483-.43v3.225c0 1.64-1.303 3.002-2.948 3.002s-2.949-1.361-2.949-3.002 1.303-3.003 2.948-3.003c.53 0 1.023.14 1.45.386v-3.128a.75.75 0 0 1 .594-.734"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.274 19.823a2.924 2.924 0 0 0 2.917 2.927h6.033A4.29 4.29 0 0 1 11 19.749c0-2.3 1.69-4.248 4.397-4.248v-1.497a2 2 0 0 1 3.828-.81c.08.178.335.7.668 1.143.142.19.26.312.341.38q.271.032.516.132V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H6.168A2.924 2.924 0 0 0 3.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileMusic;
