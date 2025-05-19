import React from "react";
const Youtube: React.FC<
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
        d="M12 3.25c-2.474 0-4.827.16-6.952.448-2.263.306-3.798 2.294-3.798 4.5v7.603c0 2.207 1.535 4.195 3.798 4.501 2.125.288 4.478.448 6.952.448s4.827-.16 6.953-.448c2.262-.306 3.797-2.294 3.797-4.5V8.198c0-2.207-1.535-4.195-3.797-4.501A52 52 0 0 0 12 3.25m-1.614 5.107A.75.75 0 0 0 9.25 9v6a.75.75 0 0 0 1.136.643l5-3a.75.75 0 0 0 0-1.286z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Youtube;
