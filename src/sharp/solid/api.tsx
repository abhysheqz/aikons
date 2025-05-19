import React from "react";
const Api: React.FC<
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
        d="M8.292 12.25H6.96l.57-2.284zM14.5 11.25h-1.25v-1.5h1.25a.75.75 0 0 1 0 1.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm6.54 6H6.414L4.77 15.08l1.456.365.358-1.695h2.207l.496 1.75 1.423-.474zm5.96 0h-2.75v7.25h1.5v-2.75h1.25a2.25 2.25 0 0 0 0-4.5m3.25 7.25h1.5V8.25h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Api;
