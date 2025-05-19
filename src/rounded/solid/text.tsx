import React from "react";
const Text: React.FC<
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
        d="M8 21a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 4c-1.334 0-3.074.143-4.487.287-.66.067-.789.09-.89.131-.27.11-.5.366-.583.646C6.01 5.168 6 5.308 6 6a1 1 0 1 1-2 0v-.11c0-.518-.001-.971.12-1.388A3.04 3.04 0 0 1 5.87 2.566c.402-.164.84-.208 1.338-.258l.103-.01C8.735 2.151 10.559 2 12 2s3.265.152 4.69.297l.103.01c.498.051.936.095 1.338.26a3.04 3.04 0 0 1 1.748 1.935c.122.417.122.87.121 1.388V6a1 1 0 1 1-2 0c0-.692-.01-.832-.04-.936a1.04 1.04 0 0 0-.583-.646c-.101-.04-.23-.064-.89-.131C15.074 4.143 13.334 4 12 4"
      />
    </svg>
  );
};
export default Text;
