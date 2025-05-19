import React from "react";
const TextCreation: React.FC<
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
        d="M17.75 1h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75M1.75 1h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4A.75.75 0 0 1 1 5.75v-4A.75.75 0 0 1 1.75 1M1.22 17.22a.75.75 0 0 1 .53-.22h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .22-.53M17.22 17.22a.75.75 0 0 1 .53-.22h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .22-.53"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 2.75h12v2h-12zm-3 15v-12h2v12zm18-12v12h-2v-12zm-3 15h-12v-2h12zM6.75 8.75a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v.5a1 1 0 1 1-2 0v-.5h-2v6h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5v-6h-2v.5a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextCreation;
