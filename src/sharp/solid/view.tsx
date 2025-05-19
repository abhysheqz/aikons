import React from "react";
const View: React.FC<
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
        d="M22.579 12.253c-.257.382-.7 1.039-.897 1.299a23 23 0 0 1-2.187 2.487c-1.822 1.785-4.47 3.711-7.495 3.711s-5.673-1.926-7.495-3.71a23 23 0 0 1-2.187-2.488 40 40 0 0 1-.897-1.299L1.25 12l.17-.253c.258-.382.7-1.039.898-1.299a23 23 0 0 1 2.187-2.487C6.327 6.176 8.975 4.25 12 4.25c3.024 0 5.673 1.926 7.494 3.71.926.908 1.673 1.812 2.188 2.488.198.26.64.917.897 1.299l.17.253zM11.999 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default View;
