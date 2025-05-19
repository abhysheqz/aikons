import React from "react";
const Brain: React.FC<
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
        d="M8.41 5.017a5 5 0 0 0-5.382 5.504 4 4 0 1 0 5.745 4.813 1 1 0 1 0-1.887-.667 2.001 2.001 0 1 1-3.214-2.162A1 1 0 0 0 5.4 11.499 3 3 0 0 1 5 10a3 3 0 0 1 5.6-1.5 1 1 0 1 0 1.73-1 5 5 0 0 0-1.977-1.913A3 3 0 1 1 15.599 8.5a1 1 0 1 0 1.732 1.002c.265-.459.46-.964.569-1.5L18 8a3 3 0 1 1-.035 6 3.5 3.5 0 0 0-2.766-2.93 1 1 0 1 0-.398 1.96A1.5 1.5 0 0 1 14.5 16H14a5 5 0 0 0-5 5 1 1 0 1 0 2 0 3 3 0 0 1 3-3h.5a3.5 3.5 0 0 0 3.168-2.01q.164.01.332.01a5 5 0 1 0-.1-9.999 5.002 5.002 0 0 0-9.49-.984"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.953 9.024a1 1 0 0 1 .757 1.195c-.042.187.055.568.486.81s.807.128.945-.005a1 1 0 0 1 1.388 1.44c-.882.85-2.252.905-3.313.309-1.06-.597-1.725-1.796-1.457-2.991a1 1 0 0 1 1.194-.758"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Brain;
