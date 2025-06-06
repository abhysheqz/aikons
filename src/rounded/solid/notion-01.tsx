import React from "react";
const Notion_01: React.FC<
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
        d="M12.057 1.75h-.114c-2.19 0-3.912 0-5.255.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.181 1.343-.181 3.064-.181 5.255v.114c0 2.19 0 3.912.18 5.255.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.064.181 5.255.181h.114c2.19 0 3.912 0 5.255-.18 1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255v-.114c0-2.19 0-3.912-.18-5.255-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43-1.343-.181-3.064-.181-5.255-.181m-.425 5.474c-.234-.298-.486-.62-.853-.798-.368-.178-.777-.177-1.155-.176H7a.75.75 0 0 0 0 1.5h.679v8.5H7a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-.821v-4.103l3.754 4.717.03.037c.177.226.498.633 1.053.786.232.064.474.064.7.063h.064c.293 0 .59 0 .859-.136.383-.195.563-.52.634-.814.052-.215.05-.446.049-.562V7.75H17a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5h.821v3.517z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notion_01;
