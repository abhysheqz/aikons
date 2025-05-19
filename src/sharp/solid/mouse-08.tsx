import React from "react";
const Mouse_08: React.FC<
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
        d="M12.25 5.269a21 21 0 0 0-1.53.137c-2.311.285-4.096 2.2-4.275 4.463-.106 1.332-.195 2.715-.195 4.13s.089 2.8.195 4.131c.18 2.264 1.964 4.179 4.275 4.464.736.09 1.499.156 2.28.156s1.543-.066 2.28-.156c2.31-.285 4.095-2.2 4.275-4.464.106-1.332.195-2.715.195-4.13s-.09-2.799-.195-4.13c-.18-2.264-1.964-4.18-4.276-4.464a21 21 0 0 0-1.529-.137v2.98h.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75h.75z"
      />
      <path
        fill="currentColor"
        d="M12.25 9.75v2.5h1.5v-2.5zM5.75 2.75v-1.5h-1.5V3.5a.75.75 0 0 0 .75.75h7.25V5.27a15 15 0 0 1 1.5 0V3.5a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default Mouse_08;
