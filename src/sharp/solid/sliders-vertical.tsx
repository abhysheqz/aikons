import React from "react";
const SlidersVertical: React.FC<
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
        d="M6 14v6H4v-6zM6 4v7H4V4zM15 9H9V7h6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 15H2v-2h6zM22 13h-6v-2h6zM13 4v4h-2V4zM13 11v9h-2v-9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 4v8h-2V4zM20 15v5h-2v-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SlidersVertical;
