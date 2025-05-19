import React from "react";
const FolderCloud: React.FC<
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
        d="M14.383 15.714c.363-1.404 1.605-2.464 3.117-2.464 1.708 0 2.99 1.35 3.196 2.9 1.191.33 2.054 1.45 2.054 2.75 0 1.548-1.217 2.85-2.775 2.85H15.25c-1.682 0-3-1.406-3-3.083 0-1.377.885-2.568 2.133-2.953"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h8.263A4.4 4.4 0 0 1 11 18.667c0-1.678.948-3.181 2.386-3.896C14.058 13.17 15.614 12 17.5 12c2.124 0 3.724 1.465 4.27 3.232.362.185.692.423.98.703v-6.94A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderCloud;
