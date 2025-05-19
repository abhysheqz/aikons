import React from "react";
const FolderShared_01: React.FC<
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
        d="M15.996 13.75a2.5 2.5 0 1 1 5.001 0 2.5 2.5 0 0 1-5 0M14.246 21c0-1.5 1.904-3.25 4.252-3.25s4.251 1.75 4.251 3.25a.75.75 0 0 1-.75.75h-7.003a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h9.142a2 2 0 0 1-.146-.75c0-1.256.764-2.392 1.707-3.158a6 6 0 0 1 1.715-.97A3.75 3.75 0 1 1 21.816 12h.934V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderShared_01;
