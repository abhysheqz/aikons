import React from "react";
const TextItalicSlash: React.FC<
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
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m10.72 5-.438 1.747 1.65 1.65.848-3.394c1.219.012 2.588.053 3.706.168.66.068.788.09.889.132.268.11.501.368.584.653.007.023.023.101.032.296C18 6.44 18 6.676 18 7a1 1 0 1 0 2 0v-.019c0-.3 0-.582-.011-.822a3.3 3.3 0 0 0-.11-.762 3.05 3.05 0 0 0-1.746-1.944c-.402-.165-.945-.22-1.442-.271C15.217 3.03 13.39 3 12 3H6.536l2 2zM9.575 9.575 7.22 19.001h-2.22a1 1 0 1 0 0 2H11a1 1 0 1 0 0-2H9.28l1.945-7.776z"
      />
    </svg>
  );
};
export default TextItalicSlash;
