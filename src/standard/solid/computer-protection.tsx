import React from "react";
const ComputerProtection: React.FC<
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
        d="M10 14.957a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.283 1.43a1.52 1.52 0 0 1 1.434 0c.513.275 1.563.769 2.815.99a1.466 1.466 0 0 1 1.218 1.435v2.218c0 1.72-.868 3.02-1.789 3.91-.917.887-1.94 1.424-2.406 1.643a1.3 1.3 0 0 1-1.11 0c-.465-.219-1.489-.756-2.406-1.643-.92-.89-1.789-2.19-1.789-3.91V3.855c0-.735.544-1.317 1.218-1.436 1.252-.22 2.302-.714 2.815-.99"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.183 1.25A2.93 2.93 0 0 0 1.25 4.182v11.725a2.93 2.93 0 0 0 2.932 2.931H11v1.958H8.09a.977.977 0 1 0 0 1.954h7.819a.977.977 0 1 0 0-1.954h-2.955v-1.958h6.864a2.93 2.93 0 0 0 2.932-2.931v-2.698a.977.977 0 0 0-1.954 0v2.698c0 .54-.438.977-.978.977H4.182a.977.977 0 0 1-.977-.977V4.182c0-.54.437-.978.977-.978l5.38.002a.977.977 0 1 0 .001-1.954z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerProtection;
