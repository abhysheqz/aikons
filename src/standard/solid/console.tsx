import React from "react";
const Console: React.FC<
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
      <path fill="currentColor" d="M13 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 15.5a4.25 4.25 0 1 1 7.104 3.149l.869 3.152a.75.75 0 0 1-.96.91l-2.763-.92-2.763.92a.75.75 0 0 1-.96-.91l.869-3.152A4.24 4.24 0 0 1 14.25 15.5m2.726 3.968-.38 1.376 1.667-.556a.75.75 0 0 1 .474 0l1.666.556-.379-1.376a4.2 4.2 0 0 1-1.524.282c-.537 0-1.051-.1-1.524-.282"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 11a8 8 0 0 1 8-8c1.83 0 3.558.612 4.951 1.635l-1.158 1.158a1 1 0 0 0 1.415 1.414l1.204-1.204a7.7 7.7 0 0 1 1.613 3.218 1 1 0 0 0 1.95-.442C19.958 4.297 15.731 1 11 1 5.477 1 1 5.477 1 11s4.477 10 10 10q.851 0 1.665-.138a1 1 0 0 0-.33-1.973A8 8 0 0 1 11 19a7.97 7.97 0 0 1-4.906-1.68l1.113-1.113a1 1 0 1 0-1.414-1.414L4.68 15.906A7.97 7.97 0 0 1 3 11"
      />
    </svg>
  );
};
export default Console;
