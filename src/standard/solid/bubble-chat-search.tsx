import React from "react";
const BubbleChatSearch: React.FC<
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
        d="M17.179 1a4.429 4.429 0 1 0 2.343 8.187l1.52 1.52a1 1 0 0 0 1.415-1.414l-1.52-1.52A4.429 4.429 0 0 0 17.179 1M14.75 5.429a2.429 2.429 0 1 1 4.372 1.456 2.417 2.417 0 0 1-1.943.972A2.43 2.43 0 0 1 14.75 5.43m-3.5 0c0-1.6.633-3.05 1.662-4.117a11 11 0 0 0-1.162-.062C5.813 1.25 1 6.063 1 12c0 1.714.44 3.196 1.148 4.569.184.356.227.738.128 1.068l-.71 2.369c-.401 1.335.843 2.58 2.178 2.179l2.37-.711c.33-.099.71-.056 1.068.128 1.372.708 2.854 1.148 4.568 1.148 5.525 0 10.076-4.168 10.682-9.531.028-.255.055-.536.076-.833v-.003a2.5 2.5 0 0 1-2.526-.615l-.77-.77a5.929 5.929 0 0 1-7.963-5.57M6.166 12a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1m3.996 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatSearch;
