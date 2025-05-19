import React from "react";
const Books_01: React.FC<
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
        d="M19.242 8.25h-9.86C7.238 8.25 5.5 9.929 5.5 12s1.738 3.75 3.882 3.75H22v-1.875h-1.75v-3.75H22V8.25h-2.758m-.992 1.875H9.382c-1.072 0-1.94.84-1.94 1.875s.868 1.875 1.94 1.875h8.868z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.494 14.25H2v1.875h1.75v3.75H2v1.875h12.618c2.144 0 3.882-1.679 3.882-3.75s-1.738-3.75-3.882-3.75H4.494M4.494 2.25H2v1.875h1.75v3.75H2V9.75h12.618C16.762 9.75 18.5 8.07 18.5 6s-1.738-3.75-3.882-3.75H4.494"
      />
    </svg>
  );
};
export default Books_01;
