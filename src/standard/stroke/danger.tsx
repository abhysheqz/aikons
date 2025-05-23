import React from "react";
const Danger: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 11.25a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M17 11.25a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M11 16l1-1 1 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2c-4.694 0-8.5 3.766-8.5 8.413 0 1.753.572 3.24 1.5 4.587-.253.28-.437.791-.437 1.196 0 .82.63 1.492 1.437 1.57v1.716c0 .325.156.632.43.808C8.174 21.415 10.087 22 12 22s3.825-.585 5.57-1.71a.96.96 0 0 0 .43-.808v-1.716a1.584 1.584 0 0 0 1.438-1.57c0-.405-.185-.917-.438-1.196.928-1.348 1.5-2.834 1.5-4.587C20.5 5.766 16.694 2 12 2M14 21.5v-2m-4 2v-2"
      />
    </svg>
  );
};
export default Danger;
