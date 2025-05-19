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
        strokeWidth={1.5}
        d="M9.5 9.753a2.5 2.5 0 1 1 2.5 2.501v2m0 1.501v1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 21.008c5.522 0 9.998-4.255 9.998-9.504S17.522 2 12 2s-9.998 4.255-9.998 9.504c0 2.678 1.162 5.008 3.004 6.788l-1 3.695a.01.01 0 0 0 .013.012l3.976-1.784c1.226.51 2.58.793 4.005.793Z"
      />
    </svg>
  );
};
export default BubbleChatQuestion;
