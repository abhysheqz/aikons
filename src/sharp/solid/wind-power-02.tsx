import React from "react";
const WindPower_02: React.FC<
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
        d="M12 7.25c-.961 0-1.74.784-1.74 1.75s.779 1.75 1.74 1.75c.962 0 1.741-.784 1.741-1.75s-.78-1.75-1.74-1.75M8.768 9A3.24 3.24 0 0 1 12 5.75 3.24 3.24 0 0 1 15.233 9 3.24 3.24 0 0 1 12 12.25 3.24 3.24 0 0 1 8.768 9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.555 2.326a3.5 3.5 0 0 0-5.047 0L3 2.849 8.773 8.8a3.24 3.24 0 0 1 3.107-3.047zM12.12 5.752A3.24 3.24 0 0 1 15.227 8.8L21 2.849l-.508-.523a3.5 3.5 0 0 0-5.047 0zM15.227 9.201a3.24 3.24 0 0 1-3.107 3.047l3.325 3.427a3.5 3.5 0 0 0 5.047 0L21 15.15zM11.88 12.248A3.24 3.24 0 0 1 8.773 9.2L3 15.151l.508.524a3.5 3.5 0 0 0 5.047 0zM9.75 16.59l-.482 5.342c-.02.21.05.418.192.574a.74.74 0 0 0 .55.244h3.98c.209 0 .409-.089.55-.244a.75.75 0 0 0 .192-.574l-.483-5.341L12 14.273z"
      />
    </svg>
  );
};
export default WindPower_02;
