import React from "react";
const TextFootnote: React.FC<
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
        d="M8 4.022a59 59 0 0 0-3.487.265c-.66.067-.789.09-.89.131-.27.11-.5.366-.583.646C3.01 5.168 3 5.308 3 6a1 1 0 1 1-2 0v-.11c0-.518-.001-.971.12-1.388A3.04 3.04 0 0 1 2.87 2.566c.402-.164.84-.208 1.338-.258l.103-.01C5.735 2.151 7.559 2 9 2s3.265.152 4.69.297l.103.01c.498.051.936.095 1.338.26a3.04 3.04 0 0 1 1.748 1.935c.122.417.122.87.121 1.388V6a1 1 0 1 1-2 0c0-.692-.01-.832-.04-.936a1.04 1.04 0 0 0-.583-.646c-.101-.04-.23-.064-.89-.131-1.08-.11-2.352-.22-3.487-.265V20h2a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h2zM19.75 6a1 1 0 0 1 1 1v1.286l.838-.379a1 1 0 1 1 .824 1.822l-1.054.477.96 1.155a1 1 0 1 1-1.537 1.278L19.75 11.4l-1.031 1.24a1 1 0 0 1-1.538-1.278l.96-1.155-1.053-.477a1 1 0 0 1 .824-1.822l.838.379V7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextFootnote;
