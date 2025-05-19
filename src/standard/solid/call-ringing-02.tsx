import React from "react";
const CallRinging_02: React.FC<
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
        d="M13.982 1.313a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m5.708 2.292a1 1 0 0 1 0 1.415l-2 2a1 1 0 1 1-1.415-1.415l2-2a1 1 0 0 1 1.415 0m-2.708 5.708a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M3.294 1.586a2 2 0 0 1 3.203.52L8.554 6.22A2 2 0 0 1 8.18 8.53l-3.317 3.316a16.07 16.07 0 0 0 6.586 6.586l3.316-3.316a2 2 0 0 1 2.31-.375l4.114 2.057a2 2 0 0 1 .52 3.203l-1.434 1.433a2.88 2.88 0 0 1-2.17.858C8.863 21.848 1.448 14.433 1.004 5.19a2.88 2.88 0 0 1 .858-2.17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallRinging_02;
