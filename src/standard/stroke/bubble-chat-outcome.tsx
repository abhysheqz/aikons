import React from "react";
const BubbleChatOutcome: React.FC<
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
        d="M11.996 12h.008m3.987 0H16m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2C6.477 2 2 6.477 2 12c0 1.576.402 2.941 1.064 4.225.26.503.343 1.085.18 1.627l-.71 2.37a1 1 0 0 0 1.245 1.244l2.369-.71c.542-.163 1.124-.08 1.627.18C9.06 21.598 10.425 22 12 22c5.523 0 10-4.477 10-10q0-.251-.012-.5"
      />
      <path fill="#D9D9D9" d="m19 3 2.5 2.5zm0 5 2.5-2.5z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19 3 2.5 2.5L19 8m-5-2.5h6.891"
      />
    </svg>
  );
};
export default BubbleChatOutcome;
