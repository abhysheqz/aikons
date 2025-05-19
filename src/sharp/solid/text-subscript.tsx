import React from "react";
const TextSubscript: React.FC<
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
        d="M9 20V3h2v17h2v2H7v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.293 2.293A1 1 0 0 1 3 2h14a1 1 0 0 1 1 1v3h-2V4H4v2H2V3a1 1 0 0 1 .293-.707M17 14h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2v1h3v2h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2v-1h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextSubscript;
