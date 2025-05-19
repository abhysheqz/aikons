import React from "react";
const ShareKnowledge: React.FC<
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
        d="M3.03 5a3.25 3.25 0 0 1 3.254-3.25A3.25 3.25 0 0 1 9.537 5a3.25 3.25 0 0 1-3.253 3.25A3.25 3.25 0 0 1 3.03 5M2.835 12.018 1.75 10.982c1.285-1.346 2.881-2.09 4.525-2.107 1.65-.016 3.263.7 4.569 2.117L9.74 12.008zM14.437 15.232a3.25 3.25 0 0 1 3.253-3.25 3.25 3.25 0 0 1 3.254 3.25 3.25 3.25 0 0 1-3.254 3.25 3.25 3.25 0 0 1-3.253-3.25M14.241 22.25l-1.085-1.036c1.285-1.346 2.882-2.09 4.526-2.107 1.649-.016 3.262.7 4.568 2.117l-1.103 1.016z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.752 20.706a6.245 6.245 0 0 1-5.5-6.206h-1.5a7.745 7.745 0 0 0 7.75 7.75h.75V19h-1.5zM20.502 4.25h-6v-1.5h6zm0 3h-6v-1.5h6zm-2.5 3h-3.5v-1.5h3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShareKnowledge;
