import React from "react";
const StudyDesk: React.FC<
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
        d="M15.766 2.07a1.75 1.75 0 0 1 2.448.166l2.412 2.714a2.75 2.75 0 0 1 .359 3.144L19.4 11H22a1 1 0 1 1 0 2h-1v9a1 1 0 1 1-2 0v-4h-6a2 2 0 0 1-2-2v-3H5v9a1 1 0 1 1-2 0v-9H2a1 1 0 1 1 0-2h1V7a2 2 0 0 1 2-2h1c.364 0 .706.097 1 .268A2 2 0 0 1 8 5h1a2 2 0 0 1 2 2v4h6.69l1.978-3.625a1.25 1.25 0 0 0-.163-1.429l-2.413-2.714a.25.25 0 0 0-.35-.023l-.547.47a2.75 2.75 0 0 1-.483 3.24l-.353.353a.75.75 0 0 1-1.06 0l-2.83-2.828a.75.75 0 0 1 0-1.06l.354-.354a2.75 2.75 0 0 1 3.33-.433zM5 7h1v4H5zm3 0v4h1V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StudyDesk;
