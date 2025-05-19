import React from "react";
const SadDizzy: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m8.31-2.5.97-.97-1.061-1.06-.97.97-.97-.97-1.06 1.06.97.97-.97.97 1.06 1.06.97-.97.97.97 1.06-1.06zm5.94 1.06.969.97 1.06-1.06-.97-.97.97-.97-1.06-1.06-.97.97-.97-.97-1.06 1.06.97.97-.97.97 1.06 1.06zm-.1 6.89a4.24 4.24 0 0 0-3.4-1.7c-1.39 0-2.624.666-3.4 1.7l-1.2-.9a5.74 5.74 0 0 1 4.6-2.3c1.882 0 3.552.905 4.6 2.3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SadDizzy;
