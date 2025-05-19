import React from "react";
const BitcoinSquare: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zM13 7.75a.75.75 0 0 0-1.5 0V8H9.25a.75.75 0 0 0 0 1.5h.25V15h-.25a.75.75 0 0 0 0 1.5h2.25v.25a.75.75 0 0 0 1.5 0v-.25h.5a2.5 2.5 0 0 0 1.785-4.25A2.5 2.5 0 0 0 13.5 8H13zm-2 3.75v-2h2.5a1 1 0 1 1 0 2zm0 3.5v-2h2.5a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinSquare;
