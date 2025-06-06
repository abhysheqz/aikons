import React from "react";
const SystemUpdate_01: React.FC<
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
        fillRule="evenodd"
        d="M10.722 1.25a1.75 1.75 0 0 0-1.66 1.197l-.687 2.062-1.064.673-2.241-.555a1.75 1.75 0 0 0-1.925.805L1.781 7.727a1.75 1.75 0 0 0 .348 2.207l1.536 1.352v1.428l-1.536 1.352a1.75 1.75 0 0 0-.347 2.207l1.364 2.295a1.75 1.75 0 0 0 1.924.805l2.265-.56.95.533.62 2.14a1.75 1.75 0 0 0 1.681 1.264h2.832a1.75 1.75 0 0 0 1.68-1.263l.62-2.141.95-.533 2.265.56a1.75 1.75 0 0 0 1.925-.805l1.39-2.338a1.75 1.75 0 0 0-.27-2.135l-1.585-1.578v-1.034l1.586-1.579a1.75 1.75 0 0 0 .27-2.134l-1.39-2.338a1.75 1.75 0 0 0-1.925-.805l-2.242.555-1.063-.673-.688-2.062a1.75 1.75 0 0 0-1.66-1.197zM8.75 12a3.25 3.25 0 0 1 4.846-2.832.75.75 0 1 0 .738-1.306 4.75 4.75 0 0 0-6.448 6.513.75.75 0 0 0 1.072.244l1.465-1a.75.75 0 1 0-.846-1.238l-.71.485A3.3 3.3 0 0 1 8.75 12m7.364-2.376a.75.75 0 0 0-1.072-.243l-1.465 1a.75.75 0 1 0 .846 1.238l.71-.485a3.253 3.253 0 0 1-4.729 3.698.75.75 0 0 0-.738 1.306 4.75 4.75 0 0 0 6.448-6.513"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SystemUpdate_01;
