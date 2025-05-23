import React from "react";
const AiLock: React.FC<
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
        d="M4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
      />
      <path
        fill="currentColor"
        d="M16.75 13a.75.75 0 0 0-1.5 0zm-1.5 6a.75.75 0 0 0 1.5 0zm-5.028-6v-.75a.75.75 0 0 0-.703.49zm.556 0 .703-.26a.75.75 0 0 0-.703-.49zm-3.481 5.74a.75.75 0 0 0 1.406.52zm5 .52a.75.75 0 0 0 1.406-.52zM15.25 13v6h1.5v-6zm-5.028.75h.556v-1.5h-.556zm-1.519 5.51.89-2.4-1.407-.52-.89 2.4zm.89-2.4 1.332-3.6-1.406-.52-1.333 3.6zm.482-3.6 1.333 3.6 1.406-.52-1.333-3.6zm1.333 3.6.889 2.4 1.406-.52-.889-2.4zm-2.52.49h3.223v-1.5H8.89z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 9.002V6.366c0-2.41 1.946-4.364 4.347-4.364h.306c2.401 0 4.347 1.954 4.347 4.364v2.636"
      />
    </svg>
  );
};
export default AiLock;
