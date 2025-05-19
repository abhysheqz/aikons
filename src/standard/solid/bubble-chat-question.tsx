import React from "react";
const BubbleChatQuestion: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75c0 1.714.44 3.196 1.148 4.569.184.356.227.738.128 1.068l-.71 2.369c-.401 1.335.844 2.58 2.179 2.179l2.369-.711c.33-.099.711-.056 1.068.128 1.372.708 2.855 1.148 4.568 1.148 5.937 0 10.75-4.813 10.75-10.75S17.687 1 11.75 1m-1 8.25a1 1 0 0 1 1-1c.59 0 1 .426 1 .919a.9.9 0 0 1-.154.51l-1.678 2.516a1 1 0 0 0-.168.555v.5a1 1 0 0 0 2 0v-.197l1.51-2.265c.32-.48.49-1.043.49-1.619 0-1.726-1.44-2.919-3-2.919a3 3 0 0 0-3 3 1 1 0 0 0 2 0m2 6.5a1 1 0 1 0-2 0v.5a1 1 0 0 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatQuestion;
