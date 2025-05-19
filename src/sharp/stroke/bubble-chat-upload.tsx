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
        strokeWidth={1.5}
        d="m16 5.005 3-2.99 3 2.99M19 9.99V2.453"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 11.983h.009m3.986 0h.01m-8 0h.008"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22.002 11.476c0 4.981-4.283 9.474-10.212 9.474-1.883 0-2.312-.294-3.742-.714l-4.017 1.756a.01.01 0 0 1-.014-.012l.962-3.803c-2.06-1.638-2.98-4.902-2.98-6.605 0-4.982 3.607-9.76 11.01-9.566"
      />
    </svg>
  );
};
export default BubbleChatUpload;
