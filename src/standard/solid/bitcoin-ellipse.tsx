import React from "react";
const BitcoinEllipse: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1m.75 5.25a.75.75 0 0 0-1.5 0V7H8.75a.75.75 0 0 0 0 1.5H9V15h-.25a.75.75 0 0 0 0 1.5H11v.75a.75.75 0 0 0 1.5 0v-.75h.25a2.75 2.75 0 0 0 1.887-4.75A2.75 2.75 0 0 0 12.75 7h-.25zm-2 4.75V8.5h2.25a1.25 1.25 0 1 1 0 2.5zm0 1.5h2.25a1.25 1.25 0 1 1 0 2.5H10.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinEllipse;
