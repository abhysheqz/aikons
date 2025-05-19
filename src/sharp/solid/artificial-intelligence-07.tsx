import React from "react";
const ArtificialIntelligence_07: React.FC<
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
        d="M10.047 1.25a.75.75 0 0 0-.75.75v2.152l-1.143.672-1.822-1.069a.75.75 0 0 0-1.032.276L2.348 9.228a.75.75 0 0 0 .272 1.017l1.831 1.074v1.362l-1.83 1.074a.75.75 0 0 0-.273 1.018L5.3 19.969a.75.75 0 0 0 1.031.276l1.822-1.069 1.143.672V22c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75zM13 7.75a4.25 4.25 0 1 0 0 8.5h.75v-8.5zM18.75 4.75a1.5 1.5 0 1 1 1.111 1.45l-1.33 1.33a.75.75 0 0 1-.531.22h-3v-1.5h2.69l1.11-1.111a1.5 1.5 0 0 1-.05-.389M15 16.25h3a.75.75 0 0 1 .53.22l1.331 1.33a1.503 1.503 0 0 1 1.889 1.45 1.5 1.5 0 1 1-2.95-.389l-1.11-1.111H15zM18.95 11.25a1.5 1.5 0 1 1 0 1.5H15v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArtificialIntelligence_07;
