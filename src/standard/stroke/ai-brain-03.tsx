import React from "react";
const AiBrain_03: React.FC<
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
        d="M4 16.5a3 3 0 0 0 3 3 2.5 2.5 0 0 0 5 0 2.5 2.5 0 1 0 5 0 3 3 0 0 0 2.567-4.554 3.001 3.001 0 0 0 0-5.893A3 3 0 0 0 17 4.5a2.5 2.5 0 1 0-5 .001 2.5 2.5 0 0 0-5 0 3 3 0 0 0-2.567 4.554 3.001 3.001 0 0 0 0 5.893A3 3 0 0 0 4 16.5"
      />
      <path
        fill="currentColor"
        d="M16.25 9a.75.75 0 0 0-1.5 0zm-1.5 6a.75.75 0 0 0 1.5 0zm-4.528-6v-.75a.75.75 0 0 0-.703.49zm.556 0 .703-.26a.75.75 0 0 0-.703-.49zm-3.481 5.74a.75.75 0 0 0 1.406.52zm5 .52a.75.75 0 0 0 1.406-.52zM14.75 9v6h1.5V9zm-4.528.75h.556v-1.5h-.556zm-1.519 5.51.89-2.4-1.407-.52-.89 2.4zm.89-2.4 1.332-3.6-1.406-.52-1.333 3.6zm.482-3.6 1.333 3.6 1.406-.52-1.333-3.6zm1.333 3.6.889 2.4 1.406-.52-.889-2.4zm-2.52.49h3.223v-1.5H8.89z"
      />
    </svg>
  );
};
export default AiBrain_03;
