import React from "react";
const Contracts: React.FC<
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
        d="M1.25 1.25h17.5v6.732l-6.652 6.652-.942 4.71 4.71-.942 2.884-2.884v7.232H1.25zm7.714 17L7.25 14.821 5.536 18.25H4.25v1.5h2.214l.786-1.573.786 1.573h2.214v-1.5zm-3.714-13h9.5v1.5h-9.5zm7.5 4h-7.5v1.5h7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m20.75 7.75 2 2-1.47 1.47-2-2zM18.22 10.28l-4.97 4.97-.5 2.5 2.5-.5 4.97-4.97z"
      />
    </svg>
  );
};
export default Contracts;
