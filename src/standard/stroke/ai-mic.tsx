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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 11a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5M20 11a8 8 0 0 1-8 8m0 0a8 8 0 0 1-8-8m8 8v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.333 4.646a2.67 2.67 0 0 0 2.313-2.313C16.67 2.15 16.816 2 17 2s.331.15.354.333a2.67 2.67 0 0 0 2.313 2.313c.183.023.333.17.333.354s-.15.331-.333.354a2.67 2.67 0 0 0-2.313 2.313C17.33 7.85 17.184 8 17 8s-.331-.15-.354-.333a2.67 2.67 0 0 0-2.313-2.313C14.15 5.33 14 5.184 14 5s.15-.331.333-.354Z"
      />
    </svg>
  );
};
export default AiMic;
