import React from "react";
const MoneySend_01: React.FC<
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
        d="m12 1.748 3.914 3.914L14.5 7.076l-1.5-1.5v3.586h-2V5.576l-1.5 1.5-1.414-1.414z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 22.251H1.25v-15.5h6.154L9.75 9.097v1.318h4.5V9.097l2.346-2.346h6.154zm-20-1.5h3.18a4 4 0 0 0-3.18-3.18zm18.5-3.18a4 4 0 0 0-3.18 3.18h3.18zM12 11.502a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-9.25-.07a4 4 0 0 0 3.18-3.18H2.75zm15.32-3.18a4 4 0 0 0 3.18 3.18V8.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneySend_01;
