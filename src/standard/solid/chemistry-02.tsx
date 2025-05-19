import React from "react";
const Chemistry_02: React.FC<
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
        d="M6 3a1 1 0 0 0-2 0v5H3a1 1 0 0 0 0 2h1v9a3 3 0 0 0 3 3h14a1 1 0 1 0 0-2H7a1 1 0 0 1-1-1v-9h5.5a1 1 0 1 0 0-2H6zM15.5 8a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2z"
      />
      <path
        fill="currentColor"
        d="M10.496 3a1 1 0 0 0 0 2h.25v3.843L7.922 15.3a1.75 1.75 0 0 0 1.603 2.451h7.942a1.75 1.75 0 0 0 1.604-2.451l-2.825-6.456V5h.25a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
export default Chemistry_02;
