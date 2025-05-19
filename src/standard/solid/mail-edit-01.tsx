import React from "react";
const MailEdit_01: React.FC<
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
        d="M3.932 2A2.93 2.93 0 0 0 1 4.932v11.73a2.93 2.93 0 0 0 2.932 2.932h6.636a.977.977 0 0 0 0-1.955H3.932a.977.977 0 0 1-.977-.977V7.217l7.595 3.797a2.69 2.69 0 0 0 2.404 0l7.595-3.797v3.426a.977.977 0 0 0 1.954 0V4.932A2.93 2.93 0 0 0 19.572 2zm15.85 10.267a.75.75 0 0 0-1.06 0l-5.5 5.5a.75.75 0 0 0-.22.53v2.5c0 .414.335.75.75.75h2.5a.75.75 0 0 0 .53-.22l5.5-5.5a.75.75 0 0 0 0-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailEdit_01;
