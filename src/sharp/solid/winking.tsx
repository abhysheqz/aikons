import React from "react";
const Winking: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.4 13.3a4.24 4.24 0 0 1-3.4 1.7 4.24 4.24 0 0 1-3.4-1.7l-1.2.9a5.74 5.74 0 0 0 4.6 2.3 5.74 5.74 0 0 0 4.6-2.3zm-1.024-7.466L15 7.5l.624.416v.001l-.007.01a4 4 0 0 0-.13.209c-.06.1-.134.228-.212.373.86-.073 1.75.274 2.325 1.04l-1.2.9c-.45-.6-1.35-.6-1.8 0a.75.75 0 0 1-1.35-.45c0-.69.326-1.454.58-1.96a10 10 0 0 1 .53-.932l.011-.016.003-.005zM8 7.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Winking;
