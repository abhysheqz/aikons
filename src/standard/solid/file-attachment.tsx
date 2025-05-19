import React from "react";
const FileAttachment: React.FC<
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
        d="M7.75 3.25c-1.391 0-2.5 1.112-2.5 2.462V8.48a1 1 0 0 1-2 0V5.71c0-2.474 2.025-4.461 4.5-4.461s4.5 1.987 4.5 4.462v2.807c0 1.519-1.242 2.731-2.75 2.731s-2.75-1.212-2.75-2.73V5.711a1 1 0 0 1 2 0v2.807c0 .393.325.731.75.731a.74.74 0 0 0 .75-.73V5.711c0-1.35-1.109-2.462-2.5-2.462"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.264 10.504-.014 9.31a2.924 2.924 0 0 0 2.917 2.936h6.803a.97.97 0 0 0 .686-.285l6.809-6.828a.98.98 0 0 0 .285-.692V4.182a2.924 2.924 0 0 0-2.917-2.932H11.34a5.68 5.68 0 0 1 2.16 4.462v2.807c0 2.223-1.816 3.981-4 3.981a4.01 4.01 0 0 1-3.677-2.41c-.406.396-.961.64-1.573.64a2.24 2.24 0 0 1-.986-.226m9.303 10.29 6.237-6.255h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileAttachment;
