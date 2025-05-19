import React from "react";
const MailUpload_01: React.FC<
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
        d="M3.932 2A2.93 2.93 0 0 0 1 4.932v11.73a2.93 2.93 0 0 0 2.932 2.932h8.044a.977.977 0 0 0 0-1.955H3.932a.977.977 0 0 1-.977-.977V7.217l7.595 3.797a2.69 2.69 0 0 0 2.404 0l7.595-3.797v2.318a.977.977 0 0 0 1.954 0V4.932A2.93 2.93 0 0 0 19.572 2zm15.32 14.504v4.293a1 1 0 0 1-2 0v-4.293h-1.793c-.266 0-.544-.097-.64-.344a1 1 0 0 1 .225-1.07l2.5-2.5a1 1 0 0 1 1.415 0l2.5 2.5a1 1 0 0 1 .225 1.07c-.097.247-.374.344-.64.344z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailUpload_01;
