import React from "react";
const BubbleChatSecure: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 12h.008M8 12h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 5.62V3.65a.634.634 0 0 0-.523-.62 9.1 9.1 0 0 1-2.66-.95.66.66 0 0 0-.634 0 9.1 9.1 0 0 1-2.66.95.634.634 0 0 0-.523.62v1.97c0 2.572 2.542 3.974 3.294 4.333.132.063.28.063.412 0C19.458 9.594 22 8.192 22 5.62Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 2c-5.053.502-9 4.815-9 10 0 1.576.402 2.941 1.064 4.225.26.503.343 1.085.18 1.627l-.71 2.37a1 1 0 0 0 1.245 1.244l2.369-.71c.542-.163 1.124-.08 1.627.18C9.06 21.598 10.425 22 12 22c5.355 0 9.74-4.21 10-9.5"
      />
    </svg>
  );
};
export default BubbleChatSecure;
