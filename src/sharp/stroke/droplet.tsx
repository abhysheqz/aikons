import React from "react";
const Droplet: React.FC<
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
        d="M12 2S3.5 8 3.5 13.678C3.5 17.78 6.719 22 12 22s8.5-4.22 8.5-8.322C20.5 8 12 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 14a4 4 0 0 1-4 4"
      />
    </svg>
  );
};
export default Droplet;
