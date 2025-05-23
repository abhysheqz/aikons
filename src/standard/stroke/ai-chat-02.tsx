import React from "react";
const AiChat_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2.5h-4c-4.418 0-8 3.78-8 8.444V12c0 2.415.96 4.593 2.5 6.132 0 .771-.2 2.524-1 3.368 2.5 0 4.005-1.474 4.005-1.474a7.6 7.6 0 0 0 2.495.418h4c4.418 0 8-3.78 8-8.444v-1.056C22 6.281 18.418 2.5 14 2.5"
      />
      <path
        fill="currentColor"
        d="M16.75 8.5a.75.75 0 0 0-1.5 0zm-1.5 6a.75.75 0 0 0 1.5 0zm-5.028-6v-.75a.75.75 0 0 0-.703.49zm.556 0 .703-.26a.75.75 0 0 0-.703-.49zm-3.481 5.74a.75.75 0 0 0 1.406.52zm5 .52a.75.75 0 0 0 1.406-.52zM15.25 8.5v6h1.5v-6zm-5.028.75h.556v-1.5h-.556zm-1.519 5.51.89-2.4-1.407-.52-.89 2.4zm.89-2.4 1.332-3.6-1.406-.52-1.333 3.6zm.482-3.6 1.333 3.6 1.406-.52-1.333-3.6zm1.333 3.6.889 2.4 1.406-.52-.889-2.4zm-2.52.49h3.223v-1.5H8.89z"
      />
    </svg>
  );
};
export default AiChat_02;
