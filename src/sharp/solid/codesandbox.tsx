import React from "react";
const Codesandbox: React.FC<
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
        d="m20.917 5.83-8.918 5.084-8.917-5.083 3.24-1.606L12 7.038l5.678-2.813zM21.75 7.07l-9.001 5.131V22.5l3.501-1.927v-6.836l5.5-3.634z"
      />
      <path
        fill="currentColor"
        d="M21.75 11.89v5.217c0 .27-.148.519-.386.65l-3.614 1.99v-5.215zM11.249 22.499l-3.5-1.927v-6.869L2.25 10.59V7.071l8.999 5.13z"
      />
      <path
        fill="currentColor"
        d="m2.636 17.757 3.613 1.99v-5.181L2.25 12.3v4.806c0 .27.148.519.386.65M11.665 1.578a.76.76 0 0 1 .67 0L16 3.394l-4 1.982-4-1.982z"
      />
    </svg>
  );
};
export default Codesandbox;
