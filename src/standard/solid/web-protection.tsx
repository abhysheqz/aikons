import React from "react";
const WebProtection: React.FC<
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
        d="M3.5 18.5V9h17v9.5a1 1 0 0 1-1 1H19a1 1 0 1 0 0 2h.5a3 3 0 0 0 3-3V4.003a3 3 0 0 0-3.002-3l-15 .008a3 3 0 0 0-2.998 3V18.5a3 3 0 0 0 3 3H5a1 1 0 1 0 0-2h-.5a1 1 0 0 1-1-1M6.5 4a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2zm3.991 0a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.283 12.43a1.52 1.52 0 0 1 1.434 0c.513.275 1.563.769 2.815.99a1.466 1.466 0 0 1 1.218 1.435v2.218c0 1.72-.868 3.02-1.789 3.91-.917.887-1.94 1.424-2.406 1.643a1.3 1.3 0 0 1-1.11 0c-.465-.219-1.489-.756-2.406-1.643-.92-.89-1.789-2.19-1.789-3.91v-2.218c0-.735.544-1.317 1.218-1.436 1.252-.22 2.302-.714 2.815-.99"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebProtection;
