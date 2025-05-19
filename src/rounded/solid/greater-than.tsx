import React from "react";
const GreaterThan: React.FC<
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
        d="M5.988 3.266a1.25 1.25 0 0 0 .278 1.746l8.33 6.04c.54.392.864.671 1.047.88q.035.038.057.068-.022.03-.057.069c-.183.208-.507.487-1.046.879l-8.33 6.04a1.25 1.25 0 0 0 1.467 2.024l8.33-6.04c.574-.416 1.084-.828 1.458-1.254.375-.427.728-1 .728-1.718 0-.719-.353-1.291-.728-1.718-.373-.425-.884-.837-1.458-1.253l-8.33-6.04a1.25 1.25 0 0 0-1.746.277"
      />
    </svg>
  );
};
export default GreaterThan;
