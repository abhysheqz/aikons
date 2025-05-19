import React from "react";
const MessageUnlock_02: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.351 5.5V4c0-1.105.887-2 1.98-2 .591 0 1.122.262 1.485.677M14.866 5.5h6.93V11h-6.93z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.892 12.5h.009m-3.964 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.444 2.995C1.21 4.584.257 13.4 3.609 18.003l-1.585 3.92c-.03.074-.039.097.037.068l4.36-1.488c2.327 1.488 8.47 1.318 10.656.145 1.99-1.067 4.309-3.044 4.692-7.033M9.444 2.995c.14-.008.339-.001.492 0m-.492 0h.492m0 0h.043m-.043 0h2.73"
      />
    </svg>
  );
};
export default MessageUnlock_02;
