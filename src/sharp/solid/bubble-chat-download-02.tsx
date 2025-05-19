import React from "react";
const BubbleChatDownload_02: React.FC<
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
        d="m19.043 10.664 3.707-3.707-1.414-1.414-1.293 1.293V1.25h-2v5.586L16.75 5.543l-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.043 12.432 3.395-3.395c.204.788.312 1.613.312 2.463 0 5.696-4.85 10.25-10.75 10.25-1.405 0-2.75-.258-3.983-.727L3.25 22.75l.911-4.236C2.361 16.686 1.25 14.22 1.25 11.5 1.25 5.804 6.1 1.25 12 1.25c1.718 0 3.347.386 4.793 1.074v1.494l-.043-.043-3.182 3.182zM9.01 11H7v2h2.009zm3.996 2v-2h-2.01v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatDownload_02;
