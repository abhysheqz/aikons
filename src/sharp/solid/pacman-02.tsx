import React from "react";
const Pacman_02: React.FC<
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
        d="M12 1.5a8 8 0 0 1 8 8v11.4a1.6 1.6 0 1 1-3.2 0v-.8a1.6 1.6 0 1 0-3.2 0v.8a1.6 1.6 0 1 1-3.2 0v-.8a1.6 1.6 0 1 0-3.2 0v.8a1.6 1.6 0 1 1-3.2 0V9.5a8 8 0 0 1 8-8M9 8.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zm5.991 0a1.25 1.25 0 0 0 0 2.5H15a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pacman_02;
