import React from "react";
const TextSmallcaps: React.FC<
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
        d="M2 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 1 1-2 0V5h-4v13h1a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h1V5H4v1a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v.5a1 1 0 1 1-2 0V13h-2v6h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5v-6h-2v.5a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextSmallcaps;
