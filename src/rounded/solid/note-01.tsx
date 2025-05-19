import React from "react";
const Note_01: React.FC<
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
        d="M7 1.125a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.556 2.375h-3.112c-1.602 0-2.881 0-3.884.135-1.037.14-1.89.435-2.565 1.11s-.97 1.528-1.11 2.565c-.135 1.003-.135 2.282-.135 3.884v5.112c0 1.602 0 2.881.135 3.884.14 1.037.435 1.89 1.11 2.565s1.528.97 2.565 1.11c1.003.135 2.282.135 3.884.135h3.112c1.602 0 2.881 0 3.884-.135 1.037-.14 1.89-.435 2.565-1.11s.97-1.528 1.11-2.565c.135-1.003.135-2.282.135-3.884v-5.112c0-1.602 0-2.881-.135-3.884-.14-1.037-.435-1.89-1.11-2.565s-1.528-.97-2.565-1.11c-1.003-.135-2.282-.135-3.884-.135M8 9.125a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_01;
