import React from "react";
const BubbleChatQuestion: React.FC<
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
        strokeWidth={1.5}
        d="M12 16v.5m0-3V13l1.678-2.517A1.9 1.9 0 0 0 14 9.42c0-1.11-.925-1.919-2-1.919a2 2 0 0 0-2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.576.402 2.941 1.064 4.225.26.503.343 1.085.18 1.627l-.71 2.37a1 1 0 0 0 1.245 1.244l2.37-.71c.542-.163 1.123-.08 1.627.18C9.059 21.598 10.424 22 12 22"
      />
    </svg>
  );
};
export default BubbleChatQuestion;
