import React from "react";
const BubbleChatDelay: React.FC<
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
        d="M18 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.03 5.78 2-2-1.061-1.06-2 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.75 6c0-1.825.782-3.467 2.03-4.61A11 11 0 0 0 12 1.25C6.1 1.25 1.25 5.804 1.25 11.5c0 2.719 1.11 5.186 2.911 7.014L3.25 22.75l4.767-1.727c1.233.47 2.578.727 3.983.727 5.9 0 10.75-4.554 10.75-10.25q0-.68-.09-1.335A6.25 6.25 0 0 1 11.75 6m-2.741 5H7v2h2.009zm3.996 2v-2h-2.01v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatDelay;
