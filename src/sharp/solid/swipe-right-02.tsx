import React from "react";
const SwipeRight_02: React.FC<
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
        d="m6 20.738-.157-.225c-.18-.256-.425-.607-.686-.983-.515-.744-1.11-1.616-1.373-2.05l-.183-.295c-.269-.43-.588-.942-.803-1.465-.281-.681-.436-1.486-.133-2.358.17-.49.515-.98.872-1.406.368-.44.8-.87 1.203-1.242A23 23 0 0 1 6 9.634V3.75a2.5 2.5 0 0 1 5 0v4.998c1.864.063 4.569.638 6.603 2.685.936.942.991 2.32.82 3.46-.175 1.177-.626 2.343-.998 3.12l-1.033 2.157v2.58H6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.671 5.457-.792.793 1.414 1.414L21.5 4.457 18.293 1.25l-1.414 1.414.792.793h-3.585v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeRight_02;
