import React from "react";
const ZoomCircle: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        fill="currentColor"
        d="M6.5 9v-.75a.75.75 0 0 0-.75.75zm6.5 6v.75a.75.75 0 0 0 .75-.75zm4.5-5.5h.75a.75.75 0 0 0-1.136-.643zM15 11l-.386-.643-.364.218V11zm2.5 3.5-.386.643a.75.75 0 0 0 1.136-.643zM15 13h-.75v.425l.364.218zM5.75 9v4h1.5V9zm2.75 6.75H13v-1.5H8.5zm5.25-.75v-4h-1.5v4zM11 8.25H6.5v1.5H11zm6.114.607-2.5 1.5.772 1.286 2.5-1.5zm.772 5-2.5-1.5-.772 1.286 2.5 1.5zM14.25 11v2h1.5v-2zm4 3.5v-5h-1.5v5zm-4.5-3.5A2.75 2.75 0 0 0 11 8.25v1.5c.69 0 1.25.56 1.25 1.25zm-8 2a2.75 2.75 0 0 0 2.75 2.75v-1.5c-.69 0-1.25-.56-1.25-1.25z"
      />
    </svg>
  );
};
export default ZoomCircle;
