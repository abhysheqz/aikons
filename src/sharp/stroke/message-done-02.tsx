import React from "react";
const MessageDone_02: React.FC<
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
        d="m13.887 5.963 1.981 1.981L21.813 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.901 12.403h.009m3.95 0h.008m-7.925 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.922 2.995C2.47 3.423-.219 12.439 3.624 17.883l-1.556 3.91a.1.1 0 0 0 .127.13l4.266-1.567c2.255 1.469 8.846 1.472 11.166-.201 2.253-1.245 5.823-4.982 3.5-12.151M9.921 2.995a8 8 0 0 1 .474-.014m-.474.014 1.412-.014"
      />
    </svg>
  );
};
export default MessageDone_02;
