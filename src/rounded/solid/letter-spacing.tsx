import React from "react";
const LetterSpacing: React.FC<
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
        d="M2 23a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v20a1 1 0 0 1-1 1M22 23a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v20a1 1 0 0 1-1 1M11.686 7.664c-.361.754-.76 1.916-1.328 3.585l-.256.751h3.797l-.256-.75c-.57-1.67-.967-2.832-1.329-3.586A3.6 3.6 0 0 0 12 7.11a3.6 3.6 0 0 0-.314.554M14.58 14l1.474 4.323a1 1 0 0 0 1.893-.646l-2.435-7.144c-.54-1.582-.975-2.859-1.394-3.734-.213-.444-.458-.865-.767-1.185-.328-.34-.778-.614-1.35-.614s-1.023.273-1.352.614c-.308.32-.553.741-.766 1.185-.42.875-.855 2.152-1.394 3.734l-2.435 7.144a1 1 0 0 0 1.893.646L9.42 14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LetterSpacing;
