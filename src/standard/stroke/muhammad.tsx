import React from "react";
const Muhammad: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.86 2.533 9.5 4.5H6a1 1 0 0 0-1 1V9l-1.967 2.36a1 1 0 0 0 0 1.28L5 15v3.5a1 1 0 0 0 1 1h3.5l2.36 1.967a1 1 0 0 0 1.28 0L15.5 19.5H19a1 1 0 0 0 1-1V15l1.967-2.36a1 1 0 0 0 0-1.28L20 9V5.5a1 1 0 0 0-1-1h-3.5l-2.36-1.967a1 1 0 0 0-1.28 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.584 10.516c-.43-.547-.539-1.16-.4-1.72.17-.693.77-.956 1.433-.7.83.322.97 1.431.167 1.817-.374.18-.78.382-1.2.603m0 0c-.532.279-1.584.984-1.584.984l4.5.5c-2.121.305-6 1-5 4-1.5-1-1.697-1.668-1.813-3m0 0c-.072-.834-.005-1.71-.005-3.398M10.687 13c-.187 1-2.096 1.963-3.187.5"
      />
    </svg>
  );
};
export default Muhammad;
