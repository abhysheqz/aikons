import React from "react";
const StructureFolder: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 22v-5H2v5zM22 22v-5h-6v5z"
      />
      <path
        fill="currentColor"
        d="M5 13v-.75a.75.75 0 0 0-.75.75zm14.001 0h.75a.75.75 0 0 0-.75-.75zm-14.75 4a.75.75 0 0 0 1.5 0zM5 13.75h14.001v-1.5H5zM4.25 13l.001 4h1.5l-.001-4zm14.001 0v4h1.5v-4zM7.5 2v-.75a.75.75 0 0 0-.75.75zm0 8h-.75c0 .414.336.75.75.75zm9 0v.75a.75.75 0 0 0 .75-.75zm0-6h.75a.75.75 0 0 0-.75-.75zm-4 0-.53.53.22.22h.31zm-2-2 .53-.53-.22-.22h-.31zM6.75 2v8h1.5V2zm.75 8.75h9v-1.5h-9zm9.75-.75V4h-1.5v6zm-.75-6.75h-4v1.5h4zm-3.47.22-2-2-1.06 1.06 2 2zM10.5 1.25h-3v1.5h3z"
      />
    </svg>
  );
};
export default StructureFolder;
