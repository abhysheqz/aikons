import React from "react";
const Worry: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m8.932 4.002c-.453-.336-.935-.336-1.388 0l-.347.258a.75.75 0 0 1-.894-1.204l.347-.258c.984-.73 2.192-.73 3.176 0l.27.2c.452.336.934.336 1.387 0l.269-.2c.984-.73 2.192-.73 3.176 0l.27.2a.75.75 0 0 1-.895 1.204l-.27-.2c-.452-.336-.934-.336-1.387 0l-.269.2c-.984.73-2.192.73-3.176 0zM8 7.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zm7.991 0a1.25 1.25 0 0 0 0 2.5H16a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Worry;
