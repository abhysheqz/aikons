import React from "react";
const BitcoinCircle: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1m.75 6.25a.75.75 0 0 0-1.5 0v.25H8.75a.75.75 0 0 0 0 1.5H9v5.5h-.25a.75.75 0 0 0 0 1.5H11v.25a.75.75 0 0 0 1.5 0V16h.5a2.5 2.5 0 0 0 1.785-4.25A2.5 2.5 0 0 0 13 7.5h-.5zm-2 3.75V9H13a1 1 0 1 1 0 2zm0 3.5v-2H13a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinCircle;
