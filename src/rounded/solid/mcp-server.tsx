import React from "react";
const McpServer: React.FC<
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
        d="M11.107 2.735a3.829 3.829 0 0 1 6.389 3.018 3.82 3.82 0 0 1 2.883 1.118l.136.144a3.83 3.83 0 0 1 0 5.128l-.136.142-6.965 6.965 1.293 1.293.068.076a1 1 0 0 1-1.406 1.407l-.076-.069L12 20.664a2 2 0 0 1 0-2.828l6.965-6.965.125-.139a1.83 1.83 0 0 0 0-2.307l-.125-.14c-.67-.67-1.73-.71-2.448-.125l-.138.125-6.172 6.172a1 1 0 1 1-1.414-1.414l6.172-6.172.125-.139a1.829 1.829 0 0 0-2.572-2.572l-.14.125-8.171 8.172a1 1 0 1 1-1.414-1.414l8.172-8.172z"
      />
      <path
        fill="currentColor"
        d="M11.893 16.764a3.829 3.829 0 0 1-5.408-5.407l.136-.143 6.172-6.172a1 1 0 1 1 1.414 1.414l-6.172 6.172-.125.139a1.83 1.83 0 0 0 2.572 2.572l.139-.125 6.172-6.172a1 1 0 1 1 1.414 1.414l-6.172 6.172z"
      />
    </svg>
  );
};
export default McpServer;
