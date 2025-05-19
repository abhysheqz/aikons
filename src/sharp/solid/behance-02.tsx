import React from "react";
const Behance_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm6.13 5.5H5.75v8.5h3.38A2.502 2.502 0 0 0 10.917 12 2.502 2.502 0 0 0 9.13 7.75m1.003 2.5c0 .551-.448 1-1.003 1H7.25v-2h1.88c.555 0 1.003.449 1.003 1m-1.003 2.5H7.25v2h1.88c.555 0 1.003-.449 1.003-1s-.448-1-1.003-1M17 8.25h-3v1.5h3zm-1.448 2c-1.528 0-2.698 1.354-2.698 2.75v.5c0 1.5 1.19 2.75 2.698 2.75.629 0 1.436-.227 1.952-.694l-1.008-1.112c-.171.156-.585.306-.944.306-.565 0-1.062-.418-1.174-1H17.5a.75.75 0 0 0 .75-.75c0-1.396-1.17-2.75-2.698-2.75m.933 2h-1.866c.226-.297.572-.5.933-.5s.707.203.933.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Behance_02;
