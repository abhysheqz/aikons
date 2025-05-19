import React from "react";
const WorkflowCircle_04: React.FC<
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
        d="M2.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M14.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M2.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 15.904V16a1 1 0 1 0 2 0c0-.48 0-.79.017-1.026.015-.228.042-.315.06-.357a1 1 0 0 1 .54-.54c.042-.018.129-.045.357-.06C8.21 14 8.52 14 9 14h9a1 1 0 0 0 1-1V8h-2v4H8.968c-.439 0-.817 0-1.13.021-.28.02-.56.058-.838.152V8H5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowCircle_04;
