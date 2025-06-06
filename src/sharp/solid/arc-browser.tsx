import React from "react";
const ArcBrowser: React.FC<
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
        d="M11.602 17.444c-3.909 0-7.287-2.216-8.913-5.431a1.764 1.764 0 0 1 .816-2.383 1.824 1.824 0 0 1 2.425.801 6.34 6.34 0 0 0 5.672 3.458c.663 0 1.303-.101 1.904-.287l1.632 3.206a10.1 10.1 0 0 1-3.536.636M19.89 6.788c.992.108 1.709.986 1.599 1.962a9.7 9.7 0 0 1-3.25 6.2l-1.716-3.37a6.13 6.13 0 0 0 1.369-3.22c.11-.976 1.004-1.68 1.997-1.572"
      />
      <path
        fill="currentColor"
        d="M11.547 4c.686 0 1.312.38 1.619.982l6.333 12.445a1.763 1.763 0 0 1-.81 2.385c-.893.44-1.98.083-2.427-.795l-4.715-9.264-1.943 3.819a6.34 6.34 0 0 1-2.99-2.076l3.315-6.514A1.81 1.81 0 0 1 11.547 4M6.833 19.017a1.825 1.825 0 0 1-2.428.795 1.763 1.763 0 0 1-.81-2.385l1.295-2.544a10 10 0 0 0 3.084 1.89z"
      />
    </svg>
  );
};
export default ArcBrowser;
