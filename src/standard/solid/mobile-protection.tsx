import React from "react";
const MobileProtection: React.FC<
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
        d="M5.5 1h6.232c-1.106.314-1.982 1.325-1.982 2.605v2.218c0 2.175 1.105 3.778 2.17 4.808 1.057 1.023 2.218 1.63 2.744 1.876.69.324 1.482.324 2.172 0 .348-.163.974-.484 1.664-.979V20a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3m4 17a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.033 1.18a1.52 1.52 0 0 1 1.434 0c.513.275 1.563.769 2.815.99A1.466 1.466 0 0 1 20.5 3.604v2.218c0 1.72-.868 3.02-1.789 3.91-.917.887-1.94 1.424-2.406 1.643a1.3 1.3 0 0 1-1.11 0c-.465-.219-1.489-.756-2.406-1.643-.92-.89-1.789-2.19-1.789-3.91V3.605c0-.735.544-1.317 1.218-1.436 1.252-.22 2.302-.714 2.815-.99"
      />
    </svg>
  );
};
export default MobileProtection;
