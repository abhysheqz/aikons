import React from "react";
const MouseLeftClick_03: React.FC<
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
        d="M9.227 1.441A23 23 0 0 1 12 1.25c.95 0 1.879.08 2.773.191 2.833.352 5.02 2.715 5.24 5.508.129 1.628.237 3.32.237 5.051s-.108 3.423-.237 5.05c-.22 2.794-2.407 5.157-5.24 5.509A23 23 0 0 1 12 22.75c-.95 0-1.879-.08-2.773-.191-2.833-.352-5.02-2.715-5.24-5.509-.129-1.627-.237-3.318-.237-5.05s.108-3.423.237-5.05c.22-2.794 2.407-5.157 5.24-5.509m.237 1.94a24 24 0 0 1 1.535-.146v5.062l-3.506-4.09a4 4 0 0 1 1.97-.826M6.243 5.82a4 4 0 0 0-.322 1.283A82 82 0 0 0 5.736 10h4.088zm11.835 1.283c.075.958.143 1.923.185 2.896h-5.264V3.235c.512.03 1.023.082 1.536.146 1.906.236 3.394 1.842 3.543 3.723"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_03;
