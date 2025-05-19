import React from "react";
const Doc_02: React.FC<
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
        d="M14 14.75a.75.75 0 0 0-.75.753v1.994c0 .417.337.753.75.753s.75-.336.75-.753v-1.994a.75.75 0 0 0-.75-.753m-2.25.753A2.25 2.25 0 0 1 14 13.25c1.244 0 2.25 1.01 2.25 2.253v1.994A2.25 2.25 0 0 1 14 19.75a2.25 2.25 0 0 1-2.25-2.253zm5.5-2.253h4.5v2.502h-1.5V14.75h-1.5v3.5h1.5v-.992h1.5v2.492h-4.5zm-7.995 2.758a1.25 1.25 0 0 0-1.254-1.25h-.25v3.492h.257c.69 0 1.252-.562 1.25-1.257zm-1.26-2.75a2.75 2.75 0 0 1 2.76 2.746l.003.985a2.75 2.75 0 0 1-2.75 2.761H6.251l-.001-6.485z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.251 1.25-.001 21.5h17.5V21H5v-8.98l14.75-.016V8.629L12.36 1.25zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Doc_02;
