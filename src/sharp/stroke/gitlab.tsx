import React from "react";
const Gitlab: React.FC<
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
        strokeWidth={1.5}
        d="m8.977 10.205-3.39-7.91a.1.1 0 0 0-.187.013L2 14.178l9.987 8.054L22 14.178 18.543 2.305a.1.1 0 0 0-.187-.012l-3.413 7.911z"
      />
    </svg>
  );
};
export default Gitlab;
