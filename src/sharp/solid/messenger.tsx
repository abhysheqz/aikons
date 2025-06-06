import React from "react";
const Messenger: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.844.465 3.582 1.285 5.1l-1.26 4.706a.75.75 0 0 0 .919.918L6.9 21.466A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m2.207 12.957 3.5-3.5-1.415-1.414-2.845 2.845-2.797-2.397a1 1 0 0 0-1.41.108l-3 3.5 1.519 1.302 2.349-2.74 2.74 2.348a1 1 0 0 0 1.359-.052"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Messenger;
