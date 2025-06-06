import React from "react";
const DiscountTag_01: React.FC<
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
        d="m18.963 7.013.739-.128a.75.75 0 0 0-.57-.602zm-3.605.163a.75.75 0 1 0 .257-1.477zm-2.745-.807.53.53zm-7.907 7.924-.531-.53zm0 1.413-.53.53zm15.205-3.223.74-.128zm-2.064-4.96.946.22.34-1.46-.947-.22zm.377-.382.948 5.47 1.478-.256-.948-5.47zm.879 5.69-7.926 7.931 1.06 1.06 7.927-7.93zM5.237 14.823l7.907-7.924-1.062-1.06-7.907 7.924zm8.126-7.994 1.995.347.257-1.477-1.994-.348zm-2.54 13.933-5.586-5.586-1.06 1.06 5.585 5.587zM13.143 6.9a.25.25 0 0 1 .22-.07l.258-1.478a1.75 1.75 0 0 0-1.54.488zm-8.968 6.864a1.75 1.75 0 0 0 .001 2.474l1.06-1.061a.25.25 0 0 1 0-.353zm7.002 7a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.475 0zm7.995-8.152a.25.25 0 0 1-.07.22l1.062 1.06a1.75 1.75 0 0 0 .486-1.536z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 14.5h5M11.5 12h.009m-.007 5h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 3.5c.496.484 1.554.87 2.5.5l4.449-1.778C17.719.75 19.48 7 16.485 9"
      />
    </svg>
  );
};
export default DiscountTag_01;
