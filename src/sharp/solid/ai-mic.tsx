import React from "react";
const AiMic: React.FC<
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
        d="M4.75 10.25V11a7.25 7.25 0 1 0 14.5 0v-.75h1.5V11a8.75 8.75 0 0 1-8 8.718v3.032h-1.5v-3.032a8.75 8.75 0 0 1-8-8.718v-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.55 1.25h.4l.88 2.92 2.92.88v.4l-2.92.88-.88 2.92h-.4l-.88-2.92-2.92-.88v-.4l2.92-.88z"
      />
      <path
        fill="currentColor"
        d="M14.992 2.089A5.75 5.75 0 0 0 6.25 7v4a5.75 5.75 0 0 0 11.5 0v-.5h-2.129l-.955-3.167L11.5 6.38V4.12l3.166-.954z"
      />
    </svg>
  );
};
export default AiMic;
