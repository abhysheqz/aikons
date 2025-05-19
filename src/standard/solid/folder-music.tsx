import React from "react";
const FolderMusic: React.FC<
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
        d="M19.242 12.27a.75.75 0 0 1 .84.43c.1.222.4.84.813 1.389.206.275.421.505.631.661.211.158.368.204.475.204a.75.75 0 1 1 0 1.5c-.541 0-1.007-.23-1.371-.5a4 4 0 0 1-.483-.43v3.225c0 1.64-1.303 3.002-2.948 3.002s-2.949-1.361-2.949-3.002 1.303-3.003 2.948-3.003c.53 0 1.023.14 1.45.386v-3.128a.75.75 0 0 1 .594-.734"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h10.225A4.29 4.29 0 0 1 13 18.748c0-2.3 1.564-4.248 4.397-4.248v-1.497a2 2 0 0 1 3.828-.81c.08.178.335.7.668 1.143.142.19.26.312.341.38q.271.033.516.132V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderMusic;
