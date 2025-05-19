import React from "react";
const CursorEdit_02: React.FC<
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
        d="M6.827 8.294c-.354-.918.549-1.82 1.467-1.467l13.228 5.087c.995.383.962 1.8-.048 2.138l-5.567 1.855-1.855 5.567c-.337 1.01-1.755 1.043-2.138.048z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.75 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8A.75.75 0 0 1 4.75 4M4 4.75a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8A.75.75 0 0 1 4 4.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.97 1.97a.75.75 0 0 1 .53-.22h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .22-.53M12.75 2.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75zM1.75 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default CursorEdit_02;
