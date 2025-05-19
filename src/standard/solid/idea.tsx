import React from "react";
const Idea: React.FC<
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
        d="M4 9.37C4 4.76 7.682 1 12.25 1s8.25 3.759 8.25 8.37c0 3.067-1.631 5.372-3.984 6.78a.32.32 0 0 0-.157.211l-.28 1.677a1.75 1.75 0 0 1-1.726 1.462h-4.306a1.75 1.75 0 0 1-1.726-1.462l-.28-1.677a.32.32 0 0 0-.158-.212C5.526 14.731 4 12.42 4 9.371"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 20.75a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2h-2v2h-2v-2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Idea;
