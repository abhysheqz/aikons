import React from "react";
const More: React.FC<
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
        d="M7.75 3.194c0-.521.423-.944.944-.944h6.612c.521 0 .944.423.944.944v6.611a.944.944 0 0 1-.944.945H8.694a.944.944 0 0 1-.944-.945zm1.889.945V8.86h4.722V4.139z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM14.25 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default More;
