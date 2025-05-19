import React from "react";
const Bitcoin_02: React.FC<
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
        d="M5.75 1A1.75 1.75 0 0 0 5 4.33V5.75c0 .199.079.39.22.53l1 1a.75.75 0 0 0 1.06-1.06l-.78-.78V4.33A1.75 1.75 0 0 0 5.75 1M4 14.75a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0M11.75 10a.75.75 0 0 1 .75.75V11h.25a2.25 2.25 0 0 1 1.677 3.75 2.25 2.25 0 0 1-1.677 3.75h-.25v.25a.75.75 0 0 1-1.5 0v-.25H9.25a.75.75 0 0 1 0-1.5h.25v-4.5h-.25a.75.75 0 0 1 0-1.5H11v-.25a.75.75 0 0 1 .75-.75M11 12.5V14h1.75a.75.75 0 0 0 0-1.5zm1.75 3H11V17h1.75a.75.75 0 0 0 0-1.5M10 2.75a1.75 1.75 0 1 1 2.5 1.581v.919a.75.75 0 0 1-1.5 0V4.33a1.75 1.75 0 0 1-1-1.581M17.75 1A1.75 1.75 0 0 0 17 4.33V5.44l-.78.78a.75.75 0 0 0 1.06 1.061l1-1a.75.75 0 0 0 .22-.53V4.33A1.75 1.75 0 0 0 17.75 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bitcoin_02;
