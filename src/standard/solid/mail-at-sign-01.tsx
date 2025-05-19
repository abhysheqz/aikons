import React from "react";
const MailAtSign_01: React.FC<
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
        d="M3.932 2A2.93 2.93 0 0 0 1 4.932v11.73a2.93 2.93 0 0 0 2.932 2.932H10.5a.977.977 0 0 0 0-1.955H3.932a.977.977 0 0 1-.977-.977V7.217l7.595 3.797a2.69 2.69 0 0 0 2.404 0l7.595-3.797v3.198a.977.977 0 0 0 1.954 0V4.932A2.93 2.93 0 0 0 19.572 2zm10.82 14.797a3 3 0 1 1 6 0v.444a.333.333 0 0 1-.667 0v-.444a2.333 2.333 0 1 0-1.312 2.098 2.333 2.333 0 0 0 3.979-1.654v-.444a5 5 0 1 0-5 5 1 1 0 0 0 0-2 3 3 0 0 1-3-3m3-.334a.333.333 0 1 1 0 .667.333.333 0 0 1 0-.666"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailAtSign_01;
