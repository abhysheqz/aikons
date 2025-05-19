import React from "react";
const BubbleChatOutcome: React.FC<
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
        d="M16.514 3a2.3 2.3 0 0 1 .069-.855A10.7 10.7 0 0 0 11.75 1C5.813 1 1 5.813 1 11.75c0 1.714.44 3.196 1.148 4.569.184.356.227.738.128 1.068l-.71 2.369c-.401 1.335.843 2.58 2.178 2.179l2.37-.711c.33-.099.71-.056 1.068.128 1.372.708 2.854 1.148 4.568 1.148 5.937 0 10.75-4.813 10.75-10.75 0-1.359-.252-2.659-.712-3.856L20.34 9.341A2.25 2.25 0 0 1 16.514 7.5H13.75a2.25 2.25 0 0 1 0-4.5zM7.75 10.75a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm3.996 0a1 1 0 1 0 0 2h.008a1 1 0 1 0 0-2zm3.995 0a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm-1.991-6.5a1 1 0 1 0 0 2h4.293v1.586c0 .398.151.836.544.9a1 1 0 0 0 .87-.279l2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5a1 1 0 0 0-.87-.28c-.393.065-.544.503-.544.901V4.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatOutcome;
