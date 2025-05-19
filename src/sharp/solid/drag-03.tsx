import React from "react";
const Drag_03: React.FC<
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
        d="M9.504 5a2.5 2.5 0 1 1 5 0v4.978h3.745a3.75 3.75 0 0 1 3.75 3.75v5.522a3.75 3.75 0 0 1-3.75 3.75h-8a.75.75 0 0 1-.624-.334l-4.593-6.885a2.49 2.49 0 0 1 3.576-3.43l.896.768z"
      />
      <path
        fill="currentColor"
        d="m18.718 1-1.227 1.578c.12.094.404.366.75.71h-2.636v2h2.585l-.793.794 1.415 1.414L22 4.308z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.207 1 2 4.207l3.207 3.207L6.621 6l-.793-.793h2.586v-2H5.828l.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Drag_03;
