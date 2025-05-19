import React from "react";
const Call: React.FC<
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
        d="M3.294 1.586a2 2 0 0 1 3.203.52L8.554 6.22A2 2 0 0 1 8.18 8.53l-3.317 3.316a16.07 16.07 0 0 0 6.586 6.586l3.316-3.316a2 2 0 0 1 2.31-.375l4.114 2.057a2 2 0 0 1 .52 3.203l-1.434 1.433a2.88 2.88 0 0 1-2.17.858C8.863 21.848 1.448 14.433 1.004 5.19a2.88 2.88 0 0 1 .858-2.17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Call;
