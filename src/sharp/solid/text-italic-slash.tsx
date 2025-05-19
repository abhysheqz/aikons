import React from "react";
const TextItalicSlash: React.FC<
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
        d="M3.142 1.75 22.25 20.858l-1.392 1.392L1.75 3.142z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.85 7.338 11.436 5H8.513l-2-2H20.5l-1.052 4.213-1.942-.485L17.938 5h-4.44L12.5 8.988zM10.148 10.148l-2.215 8.853H4.5v2h8.216v-2h-2.72l1.802-7.203z"
      />
    </svg>
  );
};
export default TextItalicSlash;
