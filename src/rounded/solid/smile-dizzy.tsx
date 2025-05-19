import React from "react";
const SmileDizzy: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m5.22-4.53a.75.75 0 0 1 1.06 0l.97.97.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06m7 0a.75.75 0 0 1 1.06 0l.97.97.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06M8.6 14.55a.75.75 0 1 0-1.2.9 5.74 5.74 0 0 0 4.6 2.3 5.74 5.74 0 0 0 4.6-2.3.75.75 0 1 0-1.2-.9 4.24 4.24 0 0 1-3.4 1.7 4.24 4.24 0 0 1-3.4-1.7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmileDizzy;
