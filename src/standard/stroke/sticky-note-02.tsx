import React from "react";
const StickyNote_02: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="m21.9 14.975-2.85-.712a1 1 0 0 0-1.228.806l-.8 4.803m-.56.262-5.585 1.397a2 2 0 0 1-2.408-1.391L5.549 9.923a2 2 0 0 1 1.374-2.472l10.13-2.895a2 2 0 0 1 2.48 1.397l2.162 7.927a2 2 0 0 1-.516 1.94l-3.787 3.788a2 2 0 0 1-.93.526Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"
      />
    </svg>
  );
};
export default StickyNote_02;
