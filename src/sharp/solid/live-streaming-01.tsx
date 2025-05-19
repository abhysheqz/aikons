import React from "react";
const LiveStreaming_01: React.FC<
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
        d="M12.001 4.25c-1.255 0-2.408.607-3.218 1.623l-.623.782L6.596 5.41l.623-.782C8.364 3.19 10.07 2.25 12 2.25c1.93 0 3.637.94 4.782 2.377l.623.782-1.564 1.246-.623-.782C14.409 4.857 13.256 4.25 12 4.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.001 7.596c-.458 0-.897.22-1.218.623L10.16 9 8.596 7.755l.623-.782c.656-.824 1.648-1.377 2.782-1.377s2.126.553 2.782 1.377l.623.782L13.842 9l-.623-.782c-.321-.403-.76-.623-1.218-.623M22.75 10.25H1.25v11.5h21.5zm-15.5 8.5v-1.5h-1.5v-4h-1.5v5.5zm8.185-5.5H14l-.99 3.078-1.017-3.076-1.432-.002 1.632 5.5h1.65zm-5.685 5.5h-1.5v-5.5h1.5zm10-4v-1.5h-3.5v5.5h3.5v-1.5h-2v-.5h1.5v-1.5h-1.5v-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LiveStreaming_01;
