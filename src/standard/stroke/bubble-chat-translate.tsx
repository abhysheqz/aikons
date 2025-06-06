import React from "react";
const BubbleChatTranslate: React.FC<
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.576.402 2.94 1.064 4.224.26.504.343 1.085.18 1.628l-.71 2.369a1 1 0 0 0 1.245 1.245l2.37-.71c.542-.163 1.123-.08 1.627.18C9.059 21.598 10.424 22 12 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 9.5V8M8 9.5h8M9 17c2.712-1.808 4.845-4.226 5.5-7.5m-4 2c.167.666 1 2.4 3 4"
      />
    </svg>
  );
};
export default BubbleChatTranslate;
