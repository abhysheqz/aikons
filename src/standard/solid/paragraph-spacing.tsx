import React from "react";
const ParagraphSpacing: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M11.293 5.793a1 1 0 0 1 1.414 0l2.5 2.5A1 1 0 0 1 14.5 10H13v4h1.5a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5A1 1 0 0 1 9.5 14H11v-4H9.5a1 1 0 0 1-.707-1.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ParagraphSpacing;
