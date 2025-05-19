import React from "react";
const Chatting_01: React.FC<
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
        d="M21.3 9.174c-.032.116-.172.138-.267.065a8.01 8.01 0 0 0-10.9 11.642c.036.04.055.094.042.146a.726.726 0 0 1-.872.541 10 10 0 0 1-2.32-.87c-.345-.178-.715-.22-1.034-.124l-2.293.688c-1.292.387-2.496-.817-2.109-2.11l.688-2.292c.096-.32.054-.689-.124-1.034C1.426 14.498 1 13.063 1 11.404 1 5.658 5.658 1 11.404 1c4.865 0 8.747 3.333 9.898 7.804a.7.7 0 0 1-.002.37"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.68 15.581a6.46 6.46 0 1 1 12.92 0c0 1.038-.267 1.936-.69 2.757a.47.47 0 0 0-.05.347l.404 1.347a1.344 1.344 0 0 1-1.673 1.673l-1.347-.404a.47.47 0 0 0-.346.049c-.822.423-1.72.69-2.758.69a6.46 6.46 0 0 1-6.46-6.459"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chatting_01;
