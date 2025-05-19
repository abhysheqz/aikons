import React from "react";
const FlowConnection: React.FC<
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
        d="M3.501 1.25A1.75 1.75 0 0 0 1.751 3v5c0 .966.783 1.75 1.75 1.75h1.5v4.227a2 2 0 0 0-.239.2l-2.585 2.585a1.75 1.75 0 0 0 0 2.475l2.585 2.586a1.75 1.75 0 0 0 2.475 0l2.586-2.586q.111-.112.199-.237h4.229v1.5c0 .966.784 1.75 1.75 1.75h5a1.75 1.75 0 0 0 1.75-1.75v-5a1.75 1.75 0 0 0-1.75-1.75h-5a1.75 1.75 0 0 0-1.75 1.75V17h-4.229a2 2 0 0 0-.199-.238l-2.586-2.585a2 2 0 0 0-.236-.199V9.75h1.5A1.75 1.75 0 0 0 10.251 8V3a1.75 1.75 0 0 0-1.75-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlowConnection;
