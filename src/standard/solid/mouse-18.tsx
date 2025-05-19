import React from "react";
const Mouse_18: React.FC<
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
        d="M11.25 1.667c-.47.388-1.266.878-2.21 1.35-1.095.547-2.292 1.023-3.222 1.255a.75.75 0 0 0-.489.393C4.778 5.767 3.75 8.882 3.75 12.5c0 3.818 2.2 8.098 7.994 10.205a.75.75 0 0 0 .512 0c5.794-2.107 7.994-6.387 7.994-10.205 0-3.618-1.028-6.733-1.58-7.835a.75.75 0 0 0-.488-.393c-.93-.232-2.127-.708-3.222-1.255-.944-.472-1.74-.962-2.21-1.35v4.601c.848.121 1.5.85 1.5 1.732v2a1.75 1.75 0 0 1-1.5 1.733V13a.75.75 0 0 1-1.5 0v-1.267A1.75 1.75 0 0 1 9.75 10V8a1.75 1.75 0 0 1 1.5-1.732zm0 6.333a.25.25 0 0 1 .25-.25h1a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_18;
