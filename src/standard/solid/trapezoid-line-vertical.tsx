import React from "react";
const TrapezoidLineVertical: React.FC<
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
        d="M11.75 1a1 1 0 0 1 1 1v2.25h-2V2a1 1 0 0 1 1-1M10.75 19.75V4.25H8.087c-1.359 0-2.484 1.023-2.67 2.364l-1.39 10c-.227 1.632 1.006 3.136 2.67 3.136zM12.75 19.75V22a1 1 0 1 1-2 0v-2.25zM12.75 19.75h4.053c1.663 0 2.897-1.504 2.67-3.136l-1.39-9.999c-.186-1.34-1.311-2.363-2.669-2.364H12.75z"
      />
    </svg>
  );
};
export default TrapezoidLineVertical;
