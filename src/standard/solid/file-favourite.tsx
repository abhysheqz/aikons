import React from "react";
const FileFavourite: React.FC<
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
        d="M10.836 1.581C9.04.629 7.75 2.032 7.75 2.032S6.46.63 4.664 1.581C2.488 2.733 2.332 7.246 7.75 9.25c5.418-2.004 5.262-6.517 3.086-7.669"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.269 7.662 3.25 19.814a2.924 2.924 0 0 0 2.917 2.936h6.803a.97.97 0 0 0 .686-.285l6.809-6.828a.98.98 0 0 0 .285-.692V4.182a2.924 2.924 0 0 0-2.917-2.932h-5.414c.959 1.052 1.3 2.627.937 4.139-.486 2.02-2.17 3.923-5.172 5.033a1.25 1.25 0 0 1-.867 0c-1.83-.676-3.17-1.648-4.048-2.76m9.298 13.132 6.237-6.255h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileFavourite;
