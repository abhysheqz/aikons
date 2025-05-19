import React from "react";
const TimeSetting_02: React.FC<
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
        d="M10.722 1.25a1.75 1.75 0 0 0-1.66 1.197l-.687 2.062-1.064.673-2.241-.555a1.75 1.75 0 0 0-1.925.805L1.781 7.727a1.75 1.75 0 0 0 .348 2.207l1.536 1.352v1.428l-1.536 1.352a1.75 1.75 0 0 0-.347 2.207l1.364 2.295a1.75 1.75 0 0 0 1.924.805l2.265-.56.95.533.62 2.14a1.75 1.75 0 0 0 1.681 1.264h2.832a1.75 1.75 0 0 0 1.68-1.263l.62-2.141.95-.533 2.265.56a1.75 1.75 0 0 0 1.925-.805l1.39-2.338a1.75 1.75 0 0 0-.27-2.135l-1.585-1.578v-1.034l1.586-1.579a1.75 1.75 0 0 0 .27-2.134l-1.39-2.338a1.75 1.75 0 0 0-1.925-.805l-2.242.555-1.063-.673-.688-2.062a1.75 1.75 0 0 0-1.66-1.197zM13 7.5a1 1 0 1 0-2 0V12a1 1 0 0 0 .553.894l3 1.5a1 1 0 1 0 .894-1.788L13 11.382z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeSetting_02;
