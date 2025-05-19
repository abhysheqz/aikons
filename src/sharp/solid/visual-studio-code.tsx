import React from "react";
const VisualStudioCode: React.FC<
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
        d="M22 4.5v15L17 22 2 9l1.5-2L17 16.5v-9l-5.092 3.583L8.934 8.99 17 2zM3.5 17 2 15l2.316-2.008 2.186 1.895z"
      />
    </svg>
  );
};
export default VisualStudioCode;
