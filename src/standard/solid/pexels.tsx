import React from "react";
const Pexels: React.FC<
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
        d="M5 2.25A2.75 2.75 0 0 0 2.25 5v14A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19V5A2.75 2.75 0 0 0 19 2.25zm4 5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75v-2.26a3.25 3.25 0 0 0-.25-6.49zm.75 8v-6.5h3.75a1.75 1.75 0 1 1 0 3.5H13a.75.75 0 0 0-.75.75v2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pexels;
