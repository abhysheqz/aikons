import React from "react";
const CircleArrowDataTransferVertical: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m2.45 5.65a.75.75 0 0 0-1.2.6v9a.75.75 0 0 0 1.5 0V9l.8.6a.75.75 0 0 0 .9-1.2zm-3.7.6a.75.75 0 1 0-1.5 0V15l-.8-.6a.75.75 0 1 0-.9 1.2l2 1.5a.75.75 0 0 0 1.2-.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDataTransferVertical;
