import React from "react";
const AiChip: React.FC<
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
        d="M8.75 3.25v-2h-1.5v2h-4v4h-2v1.5h2v2.5h-2v1.5h2v2.5h-2v1.5h2v4h4v2h1.5v-2h2.5v2h1.5v-2h2.5v2h1.5v-2h4v-4h2v-1.5h-2v-2.5h2v-1.5h-2v-2.5h2v-1.5h-2v-4h-4v-2h-1.5v2h-2.5v-2h-1.5v2zm3.025 4.25h.45l.99 3.285 3.285.99v.45l-3.285.99-.99 3.285h-.45l-.99-3.285-3.285-.99v-.45l3.285-.99z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiChip;
