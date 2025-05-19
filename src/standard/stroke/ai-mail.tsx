import React from "react";
const AiMail: React.FC<
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
        d="m2 10 9.036 4.97a2 2 0 0 0 1.928 0L22 10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 12V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9"
      />
      <path
        fill="currentColor"
        d="M15.75 5a.75.75 0 0 0-1.5 0zm-1.5 5a.75.75 0 0 0 1.5 0zM10.5 5v-.75a.75.75 0 0 0-.718.534zm1 0 .718-.216a.75.75 0 0 0-.718-.534zM8.282 9.784a.75.75 0 0 0 1.436.431zm4 .431a.75.75 0 0 0 1.436-.43zM9.45 7.75a.75.75 0 0 0 0 1.5zm3.1 1.5a.75.75 0 0 0 0-1.5zM14.25 5v5h1.5V5zm-3.75.75h1v-1.5h-1zm-.782 4.466 1.5-5-1.436-.432-1.5 5zm1.064-5 1.5 5 1.436-.432-1.5-5zM9.45 9.25h3.1v-1.5h-3.1z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5 7-3 3v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10l-3-3"
      />
    </svg>
  );
};
export default AiMail;
