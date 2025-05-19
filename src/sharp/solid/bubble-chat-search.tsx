import React from "react";
const BubbleChatSearch: React.FC<
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
        d="M12.753 5.591a4.341 4.341 0 1 1 8.106 2.162l1.891 1.888-1.604 1.609-1.894-1.891a4.341 4.341 0 0 1-6.499-3.768m4.341-2.069a2.069 2.069 0 1 0 0 4.138 2.069 2.069 0 0 0 0-4.138"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.502 5.591c0-1.7.758-3.222 1.955-4.247A11 11 0 0 0 12 1.25C6.1 1.25 1.25 5.804 1.25 11.5c0 2.719 1.11 5.186 2.911 7.014L3.25 22.75l4.767-1.727c1.233.47 2.578.727 3.983.727 5.9 0 10.75-4.554 10.75-10.25v-.089l-1.602 1.607-2.167-2.163a5.591 5.591 0 0 1-7.479-5.264M9.009 11H7v2h2.009zm3.996 2v-2h-2.01v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatSearch;
