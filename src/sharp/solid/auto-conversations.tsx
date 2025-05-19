import React from "react";
const AutoConversations: React.FC<
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
        d="M19.086 7.5H16.5v-2h6v6h-2V8.914l-9 9-4-4L2.914 18.5 1.5 17.086l6-6 4 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.5 9.5h-6v-2h6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AutoConversations;
