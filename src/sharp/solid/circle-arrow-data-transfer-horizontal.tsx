import React from "react";
const CircleArrowDataTransferHorizontal: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.914 7.031l-2 2.5A.75.75 0 0 0 7.5 10.75h9v-1.5H9.06l1.026-1.282zM16.5 13.25h-9v1.5h7.44l-1.026 1.281 1.172.937 2-2.5a.75.75 0 0 0-.586-1.218"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDataTransferHorizontal;
