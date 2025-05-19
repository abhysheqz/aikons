import React from "react";
const TestTube_03: React.FC<
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
        d="M8 2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 1a1 1 0 0 1 1 1v5.27a1 1 0 0 1-.734.964 6.5 6.5 0 0 0-2.98 1.791l.135.013c1.261.138 2.864.688 4.296 2.264.91.857 2.39 1.016 4.798-.178.466-.23.64-.431.822-.641l.086-.098c.079-.088.133-.16.166-.205a6.51 6.51 0 0 0-3.855-2.946A1 1 0 0 1 13 7.27V2a1 1 0 1 1 2 0v4.545A8.503 8.503 0 0 1 12 23 8.5 8.5 0 0 1 9 6.545V2a1 1 0 0 1 1-1m.975 16.74a1 1 0 0 1-.707 1.225l-.009.003a1 1 0 1 1-.518-1.932l.01-.003a1 1 0 0 1 1.224.707m4.285-.778a1 1 0 0 0-.518-1.932l-.008.003a1 1 0 0 0 .517 1.932z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TestTube_03;
