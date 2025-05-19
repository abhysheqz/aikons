import React from "react";
const ImageNotFound_01: React.FC<
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
        d="M1.75 5.286v14.037a2.93 2.93 0 0 0 2.929 2.929h14.037l-1.952-1.953H4.679a.976.976 0 0 1-.977-.976v-4.022l3.768-3.767q.135-.135.292-.237z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.013 20.013a.97.97 0 0 0 .285-.69v-4.022l-1.768-1.767a1.81 1.81 0 0 0-2.56 0l-1.218 1.218L2.609 2.609a2.92 2.92 0 0 1 2.07-.857H19.32A2.93 2.93 0 0 1 22.25 4.68v14.643a2.92 2.92 0 0 1-.857 2.07zM15.5 6.253a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.543 1.543a1 1 0 0 1 1.414 0l19.5 19.5a1 1 0 0 1-1.414 1.414l-19.5-19.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageNotFound_01;
