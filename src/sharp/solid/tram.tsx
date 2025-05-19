import React from "react";
const Tram: React.FC<
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
        d="M12.132 3.25H5v-2h14v2h-4.465l-1.703 2.555-1.664-1.11zM6.052 22.118l1-3 1.897.632-1 3zm10 .632-1-3 1.897-.632 1 3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 4.25a1 1 0 0 0-1 1V15.5h2.5V17H4v2.25a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V17h-2.5v-1.5H20V5.25a1 1 0 0 0-1-1zM6 12V6.25h12V12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tram;
