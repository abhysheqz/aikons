import React from "react";
const SwipeUp_02: React.FC<
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
        d="M17.793 1.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414l-.793-.793V8a1 1 0 1 1-2 0V4.414l-.793.793a1 1 0 1 1-1.414-1.414zM5.75 9.634V3.75a2.5 2.5 0 0 1 5 0v4.998c1.864.063 4.569.638 6.603 2.685.936.942.991 2.32.82 3.46-.174 1.17-.62 2.33-.992 3.107l-.93 2.155V22a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-1.72a66 66 0 0 1-.804-.948c-.51-.614-1.13-1.385-1.413-1.851l-.183-.296c-.269-.43-.588-.942-.803-1.465-.281-.681-.436-1.486-.133-2.358.17-.49.515-.98.872-1.406.368-.44.8-.87 1.203-1.242a23 23 0 0 1 1.26-1.08"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeUp_02;
