import React from "react";
const Activity_03: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm6.394 5.803a1 1 0 0 0-1.788 0L7.632 11.25H6.25a1 1 0 1 0 0 2h2a1 1 0 0 0 .894-.553l1.106-2.21 3.106 6.21a1 1 0 0 0 1.788 0l1.724-3.447h1.382a1 1 0 1 0 0-2h-2a1 1 0 0 0-.894.553l-1.106 2.21z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Activity_03;
