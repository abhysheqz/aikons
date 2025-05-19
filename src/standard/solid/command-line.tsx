import React from "react";
const CommandLine: React.FC<
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
        d="M19.499 1.752a2.75 2.75 0 0 1 2.751 2.75V7.75H1.75V4.51a2.75 2.75 0 0 1 2.749-2.75zm-12.999 2a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2zm3.991 0a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2zM1.75 9.25h20.5V19.5a2.75 2.75 0 0 1-2.75 2.75h-15a2.75 2.75 0 0 1-2.75-2.75zm11.962 2.987a.75.75 0 0 0-1.423-.474l-2 6a.75.75 0 0 0 1.422.474zM8.53 13.53a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06L7.06 15zm8-1.06a.75.75 0 1 0-1.06 1.06L16.94 15l-1.47 1.47a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommandLine;
