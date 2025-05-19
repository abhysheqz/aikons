import React from "react";
const LockKey: React.FC<
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
        d="M10 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5h-2v-2.5a5.5 5.5 0 1 1 11 0v2.5h-2v-2.5a3.5 3.5 0 0 0-3.5-3.5M19.161 13.109a.944.944 0 0 1 1.335 0l2.254 2.253-1.335 1.336-1.586-1.586-.912.912.822.807-1.323 1.348-.84-.826-1.017.998a3 3 0 0 1-.576 3.516 3.097 3.097 0 0 1-4.328 0 3.004 3.004 0 0 1 0-4.298 3.1 3.1 0 0 1 3.564-.549l1.691-1.66zm-4.501 5.808a1.21 1.21 0 0 0-1.682 0 1.115 1.115 0 0 0 0 1.602 1.21 1.21 0 0 0 1.682 0 1.115 1.115 0 0 0 0-1.602"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.75 8.25H1.25v14.5h9.173a4.503 4.503 0 0 1 .181-6.25 4.59 4.59 0 0 1 4.226-1.2l1.025-1.006L18.1 12.05c.195-.195.415-.35.65-.466z"
      />
    </svg>
  );
};
export default LockKey;
