import React from "react";
const PreferenceVertical: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 11v10M19 13v8M19 3v5M11.5 3v10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 11V8H2v3zM13.5 16v-3h-4v3zM21 13v-3h-4v3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 3v3M11.5 18v3"
      />
    </svg>
  );
};
export default PreferenceVertical;
