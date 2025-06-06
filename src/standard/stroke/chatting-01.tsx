import React from "react";
const Chatting_01: React.FC<
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
        d="M10 21.771a9.6 9.6 0 0 1-2.225-.835c-.503-.26-1.085-.343-1.627-.18l-2.37.71a1 1 0 0 1-1.244-1.245l.71-2.369c.163-.542.08-1.124-.18-1.627C2.402 14.94 2 13.575 2 12 2 6.477 6.477 2 12 2c4.66 0 8.39 3.187 9.5 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 22a5.5 5.5 0 1 1 5.5-5.5c0 .867-.221 1.618-.585 2.324a1.2 1.2 0 0 0-.1.895l.391 1.303a.55.55 0 0 1-.684.684l-1.303-.39a1.2 1.2 0 0 0-.895.099c-.706.364-1.457.585-2.324.585"
      />
    </svg>
  );
};
export default Chatting_01;
