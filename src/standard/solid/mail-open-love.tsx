import React from "react";
const MailOpenLove: React.FC<
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
        d="M11.75 4.82q.135-.075.303-.142c.525-.209 1.265-.302 2.088.107 1.09.541 1.581 1.814 1.263 3.055-.325 1.265-1.44 2.437-3.408 3.119a.75.75 0 0 1-.492 0c-1.967-.682-3.083-1.854-3.407-3.119-.319-1.24.173-2.514 1.262-3.055.823-.409 1.563-.316 2.088-.107q.168.067.303.143"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.75 2.5c-.69 0-1.25.56-1.25 1.25v8H4v-8A2.75 2.75 0 0 1 6.75 1h10a2.75 2.75 0 0 1 2.75 2.75v8H18v-8c0-.69-.56-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.016 9.545 5.28 7.28 4.22 6.22 1.513 8.927A1.75 1.75 0 0 0 1 10.164v9.586a2.75 2.75 0 0 0 2.75 2.75h16a2.75 2.75 0 0 0 2.75-2.75v-9.586c0-.464-.184-.909-.513-1.237L19.28 6.22l-1.06 1.06 2.264 2.265-8.175 4.087a1.25 1.25 0 0 1-1.118 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailOpenLove;
