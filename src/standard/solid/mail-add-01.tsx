import React from "react";
const MailAdd_01: React.FC<
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
        d="M3.932 2A2.93 2.93 0 0 0 1 4.932v11.73a2.93 2.93 0 0 0 2.932 2.932h7.365a.978.978 0 0 0 0-1.955H3.932a.977.977 0 0 1-.977-.977V7.217l7.595 3.797a2.69 2.69 0 0 0 2.404 0l7.595-3.797v4.14a.977.977 0 1 0 1.954 0V4.933A2.93 2.93 0 0 0 19.572 2zm15.32 11.797a1 1 0 0 0-2 0v2.5h-2.5a1 1 0 1 0 0 2h2.5v2.5a1 1 0 1 0 2 0v-2.5h2.5a1 1 0 0 0 0-2h-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailAdd_01;
