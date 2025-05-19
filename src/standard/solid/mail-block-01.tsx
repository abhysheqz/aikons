import React from "react";
const MailBlock_01: React.FC<
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
        d="M3.932 2A2.93 2.93 0 0 0 1 4.932v11.73a2.93 2.93 0 0 0 2.932 2.932h7.365a.978.978 0 0 0 0-1.955H3.932a.977.977 0 0 1-.977-.977V7.217l7.595 3.797a2.69 2.69 0 0 0 2.404 0l7.595-3.797v3.774a.977.977 0 1 0 1.954 0v-6.06A2.93 2.93 0 0 0 19.572 2zm16.661 16.174-3.219-3.22a2.5 2.5 0 0 1 3.22 3.22m-4.655-1.827L19.2 19.61a2.5 2.5 0 0 1-3.263-3.263m2.313-3.55a4.5 4.5 0 0 0-3.149 1.286 4.5 4.5 0 1 0 3.15-1.286"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailBlock_01;
