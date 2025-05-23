import React from "react";
const BubbleChatSearch: React.FC<
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
        d="m22 10-2.147-2.147m0 0a3.43 3.43 0 0 0 1.004-2.424 3.429 3.429 0 1 0-1.004 2.424"
      />
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
        d="M11 2c-5.053.502-9 4.815-9 10 0 1.576.402 2.941 1.064 4.225.26.503.343 1.085.18 1.627l-.71 2.37a1 1 0 0 0 1.245 1.244l2.369-.71c.542-.163 1.124-.08 1.627.18C9.06 21.598 10.425 22 12 22c5.013 0 9.276-3.689 10-8.5"
      />
    </svg>
  );
};
export default BubbleChatSearch;
