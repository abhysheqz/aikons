import React from "react";
const CursorInWindow: React.FC<
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
        d="M11.47 11.47a.75.75 0 0 1 .677-.205l10 2a.75.75 0 0 1 .383 1.265L20.06 17l2.47 2.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0L17 20.06l-2.47 2.47a.75.75 0 0 1-1.265-.383l-2-10a.75.75 0 0 1 .205-.677"
      />
      <path
        fill="currentColor"
        d="M2.225 1.25a.975.975 0 0 0-.975.975v17.55c0 .538.437.975.975.975h7.313V18.8H3.2V7.75h15.6v2.275h1.95v-7.8a.975.975 0 0 0-.975-.975z"
      />
    </svg>
  );
};
export default CursorInWindow;
