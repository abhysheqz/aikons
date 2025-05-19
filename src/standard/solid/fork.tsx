import React from "react";
const Fork: React.FC<
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
        d="M18.02 1.293a1 1 0 0 1 0 1.414l-3.616 3.616.93.93 3.459-3.46a1 1 0 1 1 1.414 1.414l-3.46 3.46.93.929 3.616-3.616a1 1 0 0 1 1.414 1.414l-4.203 4.203a5.42 5.42 0 0 1-3.747 1.587h-.824l-8.43 8.99-.001.002a2.602 2.602 0 1 1-3.678-3.677l8.992-8.432v-.824a5.42 5.42 0 0 1 1.586-3.748l4.203-4.202a1 1 0 0 1 1.415 0"
      />
    </svg>
  );
};
export default Fork;
