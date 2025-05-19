import React from "react";
const UserRemove_01: React.FC<
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
        d="M15.112 13.25 18 16.138l2.889-2.888 1.361 1.362-2.888 2.888 2.888 2.888-1.361 1.362L18 18.862l-2.888 2.888-1.362-1.362L16.64 17.5l-2.889-2.888z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.62 20.75H1.75V20a7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 9.5 2.25a5.25 5.25 0 0 1 1.755 10.2c.738.17 1.436.447 2.077.812l-1.35 1.35 2.889 2.888z"
      />
    </svg>
  );
};
export default UserRemove_01;
