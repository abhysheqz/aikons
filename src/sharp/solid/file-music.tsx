import React from "react";
const FileMusic: React.FC<
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
        d="M16.647 14h1.5c0 .25.129.772.25 1.025.122.25.29.474.525.636.228.159.564.29 1.078.29h.75v1.5H20c-.747 0-1.362-.187-1.853-.503v2.797c0 1.641-1.303 3.002-2.949 3.002s-2.949-1.361-2.949-3.002 1.304-3.002 2.949-3.002c.529 0 1.022.14 1.449.386z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 1.25v21.5h8.977A4.29 4.29 0 0 1 11 19.745c0-2.3 1.544-4.248 4.398-4.248v-2.745l2.282-.003 1.714-.005.003 1.24c0 .223.128.716.604.716h.75V8.63l-7.39-7.38zm9.312 1.955 6.237 6.255h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileMusic;
