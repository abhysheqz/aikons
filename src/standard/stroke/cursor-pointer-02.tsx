import React from "react";
const CursorPointer_02: React.FC<
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
        d="m10.45 10.023 11.338 4.36a.33.33 0 0 1-.014.623l-4.92 1.64a.33.33 0 0 0-.209.209l-1.64 4.919a.33.33 0 0 1-.621.014L10.023 10.45a.33.33 0 0 1 .427-.427Z"
      />
      <path
        fill="currentColor"
        d="M10.858 7.083a.75.75 0 0 0 1.284-.774zm-4.549 5.06a.75.75 0 1 0 .774-1.285zM5.75 8.5A2.75 2.75 0 0 1 8.5 5.75v-1.5A4.25 4.25 0 0 0 4.25 8.5zM8.5 5.75c1 0 1.875.533 2.358 1.333l1.284-.774A4.25 4.25 0 0 0 8.5 4.25zm-1.417 5.108A2.75 2.75 0 0 1 5.75 8.5h-1.5c0 1.547.827 2.9 2.06 3.642z"
      />
      <path
        fill="currentColor"
        d="M14.252 8.135a.75.75 0 0 0 1.496-.095zm-6.21 7.614a.75.75 0 0 0 .094-1.498zM2.75 8.506A5.757 5.757 0 0 1 8.507 2.75v-1.5A7.257 7.257 0 0 0 1.25 8.507zM8.507 2.75a5.757 5.757 0 0 1 5.745 5.385l1.496-.095a7.257 7.257 0 0 0-7.241-6.79zm-.37 11.502A5.757 5.757 0 0 1 2.75 8.506h-1.5c0 3.851 3 7.001 6.791 7.242z"
      />
    </svg>
  );
};
export default CursorPointer_02;
