import React from "react";
const Quiz_02: React.FC<
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
        d="M8.25 19.25v1.25a2.25 2.25 0 0 0 2.25 2.25h3a2.25 2.25 0 0 0 2.25-2.25v-1.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a8.25 8.25 0 0 0-5.281 14.589c.676.563 1.188 1.218 1.41 1.911h7.742c.222-.693.734-1.348 1.41-1.912A8.25 8.25 0 0 0 12 1.25m0 5.5c-.668 0-1.25.63-1.25 1.25a.75.75 0 0 1-1.5 0c0-1.404 1.21-2.75 2.75-2.75 1.456 0 2.75 1.096 2.75 2.583 0 .529-.17 1.018-.453 1.422-.175.25-.38.487-.565.699l-.101.114c-.155.176-.296.336-.426.5-.326.41-.455.694-.455.932a.75.75 0 0 1-1.5 0c0-.774.414-1.403.78-1.865.157-.197.328-.392.484-.568l.09-.103a7 7 0 0 0 .465-.57.97.97 0 0 0 .181-.56c0-.539-.497-1.084-1.25-1.084M11.992 13a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quiz_02;
