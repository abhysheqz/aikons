import React from "react";
const BitcoinRectangle: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zM13 6.75a.75.75 0 0 0-1.5 0v.75H9.25a.75.75 0 0 0 0 1.5h.25v6.5h-.25a.75.75 0 0 0 0 1.5h2.25v.75a.75.75 0 0 0 1.5 0V17h.25a2.75 2.75 0 0 0 1.887-4.75A2.75 2.75 0 0 0 13.25 7.5H13zm-2 4.75V9h2.25a1.25 1.25 0 1 1 0 2.5zm0 1.5h2.25a1.25 1.25 0 1 1 0 2.5H11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinRectangle;
