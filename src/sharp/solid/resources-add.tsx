import React from "react";
const ResourcesAdd: React.FC<
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
        d="M1.47 1.47A.75.75 0 0 1 2 1.25h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .22-.53M13.47 13.47a.75.75 0 0 1 .53-.22h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 .22-.53M5.97 12.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 5V1.5h2V5h3.5v2H19v3.5h-2V7h-3.5V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ResourcesAdd;
