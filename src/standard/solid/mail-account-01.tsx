import React from "react";
const MailAccount_01: React.FC<
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
        d="M3.932 2A2.93 2.93 0 0 0 1 4.932v11.73a2.93 2.93 0 0 0 2.932 2.932h7.365a.978.978 0 0 0 0-1.955H3.932a.977.977 0 0 1-.977-.977V7.217l7.595 3.797a2.69 2.69 0 0 0 2.404 0l7.595-3.797V9.73a.977.977 0 1 0 1.954 0V4.932A2.93 2.93 0 0 0 19.572 2zm14.32 9.047a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m.001 5.5a4.25 4.25 0 0 0-4.251 4.25c0 .414.335.75.75.75h7.003a.75.75 0 0 0 .75-.75 4.25 4.25 0 0 0-4.252-4.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailAccount_01;
