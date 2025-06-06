import React from "react";
const AiSecurity_02: React.FC<
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
        strokeWidth={1.5}
        d="M21 11.051V6.123c0-.775-.585-1.418-1.345-1.55-3.06-.532-5.6-1.715-6.84-2.371a1.75 1.75 0 0 0-1.63 0c-1.24.656-3.78 1.84-6.84 2.371C3.585 4.705 3 5.348 3 6.123v4.928c0 6.429 6.538 9.935 8.469 10.83.34.159.721.159 1.062 0C14.462 20.987 21 17.48 21 11.051Z"
      />
      <path
        fill="currentColor"
        d="M16.75 8a.75.75 0 0 0-1.5 0zm-1.5 6a.75.75 0 0 0 1.5 0zm-5.028-6v-.75a.75.75 0 0 0-.703.49zm.556 0 .703-.26a.75.75 0 0 0-.703-.49zm-3.481 5.74a.75.75 0 0 0 1.406.52zm5 .52a.75.75 0 0 0 1.406-.52zM15.25 8v6h1.5V8zm-5.028.75h.556v-1.5h-.556zm-1.519 5.51.89-2.4-1.407-.52-.89 2.4zm.89-2.4 1.332-3.6-1.406-.52-1.333 3.6zm.482-3.6 1.333 3.6 1.406-.52-1.333-3.6zm1.333 3.6.889 2.4 1.406-.52-.889-2.4zm-2.52.49h3.223v-1.5H8.89z"
      />
    </svg>
  );
};
export default AiSecurity_02;
