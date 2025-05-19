import React from "react";
const DragLeft_01: React.FC<
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
        d="M9.938 6.64a2.39 2.39 0 1 1 4.78 0v2.734c1.756.069 4.28.625 6.181 2.565.89.907.94 2.23.78 3.314-.166 1.121-.59 2.232-.94 2.972-.185.392-.455.925-.676 1.355-.11.216-.21.408-.282.546l-.029.054.03 2.57H9.8v-2.497l-4.04-5.312a2.46 2.46 0 0 1-.008-2.987 2.285 2.285 0 0 1 3.359-.325l.024.022.804.855z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.28 1.969 1.061 1.06-1.22 1.22h3.88v1.5H5.12l1.22 1.22-1.06 1.06L2.25 5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 2.75a2.75 2.75 0 0 0-1.417 5.108l-.774 1.284a4.25 4.25 0 1 1 4.382 0l-.774-1.284A2.75 2.75 0 0 0 12.5 2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragLeft_01;
