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
        d="M12 1.25A8.75 8.75 0 0 0 3.25 10v10.4a2.35 2.35 0 1 0 4.7 0v-.8a.85.85 0 0 1 1.7 0v.8a2.35 2.35 0 1 0 4.7 0v-.8a.85.85 0 0 1 1.7 0v.8a2.35 2.35 0 1 0 4.7 0V10A8.75 8.75 0 0 0 12 1.25m-3 7.5a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zm5.991 0a1.25 1.25 0 0 0 0 2.5H15a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pacman_02;
