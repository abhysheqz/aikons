import React from "react";
const Vimeo: React.FC<
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
        strokeWidth={1.5}
        d="M8.092 4.03c-1.825-.37-4.952 2.621-6.09 3.962-.005.006 0 .016.01.015l3.97-.065c.259.813 1.794 7.987 3.634 10.495.623.952 2.304 2.894 5.29.168 2.938-2.682 5.862-7.164 6.75-10.438.515-1.379.819-4.052-1.886-4.137-2.603-.081-4.716 2.15-5.189 3.142q-.003.011.01.013c2.443.008 3.307 1.675 1.38 4.923-1.974 3.328-3.748 1.413-4.136.166l-.72-2.624c-.364-1.322-.493-2.737-1.127-3.953-.41-.787-1.04-1.493-1.896-1.667Z"
      />
    </svg>
  );
};
export default Vimeo;
