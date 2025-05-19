import React from "react";
const Line: React.FC<
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
        d="M12 1.25c-5.818 0-10.75 4.032-10.75 9.25S6.182 19.75 12 19.75q.635 0 1.25-.062V22a.75.75 0 0 0 1.275.536c1.67-1.635 4.528-4.527 6.316-6.77 1.197-1.485 1.909-3.3 1.909-5.266 0-5.218-4.932-9.25-10.75-9.25m-.257 6.864a.75.75 0 0 0-1.393.386v4.75h1.5v-2.042l1.007 1.678a.75.75 0 0 0 1.393-.386V7.75h-1.5v2.042zM6.75 11.75v-4h-1.5v4.75c0 .414.336.75.75.75h1.75v-1.5zm3 1.5v-5.5h-1.5v5.5zm5.85-5.5a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h2.65v-1.5h-1.9v-.5h1.44v-1.5h-1.44v-.5h1.9v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Line;
