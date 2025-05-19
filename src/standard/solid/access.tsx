import React from "react";
const Access: React.FC<
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
        d="M7 1.25a5.75 5.75 0 0 0-3.25 10.494v6.928c0 .729.29 1.428.805 1.944L6.47 22.53a.75.75 0 0 0 1.06 0l2.207-2.207a1.75 1.75 0 0 0 .513-1.237v-.753a1.75 1.75 0 0 0-.35-1.05l-.78-1.04a.25.25 0 0 1 .024-.326l.593-.594a1.75 1.75 0 0 0 .513-1.237v-2.342A5.75 5.75 0 0 0 7 1.25M7 5.5a1.5 1.5 0 1 0 0 3h.009a1.5 1.5 0 1 0 0-3zM12.25 14a.75.75 0 0 1 .75-.75h8c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 21 20.75h-8a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.477 11.75A7.22 7.22 0 0 0 14.25 7c0-.973-.192-1.902-.54-2.75H21c.967 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 21 11.75z"
      />
    </svg>
  );
};
export default Access;
