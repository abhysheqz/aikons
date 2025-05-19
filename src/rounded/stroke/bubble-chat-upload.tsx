import React from "react";
const BubbleChatUpload: React.FC<
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
        d="M22 12c-.237 5.082-4.622 9.133-9.995 9.133q-.976.001-1.936-.178c-.459-.087-.689-.13-.849-.105-.16.024-.387.145-.842.386a6.5 6.5 0 0 1-4.226.657 5.3 5.3 0 0 0 1.087-2.348c.1-.53-.147-1.045-.519-1.422C3.034 16.411 2 14.105 2 11.567 2 6.284 6.48 2 12.005 2q.762 0 1.495.106M16 4.5c.491-.506 1.8-2.5 2.5-2.5M21 4.5c-.491-.506-1.8-2.5-2.5-2.5m0 0v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 12h.008m3.987 0H16m-8 0h.009"
      />
    </svg>
  );
};
export default BubbleChatUpload;
