import React from "react";
const KeyframeLeft: React.FC<
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
        d="M4 3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0v-8h2.5a1 1 0 1 0 0-2H4zm12.737 3.72a1.863 1.863 0 0 0-2.474 0L9.86 10.644a1.812 1.812 0 0 0 0 2.712l4.403 3.924a1.863 1.863 0 0 0 2.474 0l4.403-3.924a1.81 1.81 0 0 0 0-2.712z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeLeft;
