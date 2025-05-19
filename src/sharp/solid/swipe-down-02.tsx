import React from "react";
const SwipeDown_02: React.FC<
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
        d="m6.001 20.737-.158-.224c-.18-.256-.424-.607-.685-.983-.515-.744-1.11-1.617-1.373-2.05l-.183-.295c-.269-.43-.588-.942-.803-1.465-.281-.681-.436-1.486-.133-2.358.17-.49.515-.98.872-1.406.368-.44.8-.87 1.203-1.242a23 23 0 0 1 1.26-1.08V3.75a2.5 2.5 0 0 1 5 0v4.997c1.864.064 4.569.639 6.603 2.686.936.942.991 2.32.82 3.46-.175 1.177-.626 2.343-.998 3.12l-1.033 2.157v2.58H6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.295 8.664 3.207-3.207-1.414-1.414-.793.793V1.25h-2v3.586l-.793-.793-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeDown_02;
