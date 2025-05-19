import React from "react";
const Hamburger_01: React.FC<
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
        d="M2.75 10A6.75 6.75 0 0 1 9.5 3.25h5A6.75 6.75 0 0 1 21.25 10v.75H2.75zm13.258-3a1 1 0 0 1-1 1h-.01a1 1 0 1 1 0-2h.01a1 1 0 0 1 1 1m-5.924-1.124-1.5 1 .832 1.248 1.5-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 12.25a.75.75 0 0 0-.53.22L14 13.94l-1.47-1.47a.75.75 0 0 0-.53-.22H3.5a2.25 2.25 0 0 0-2.122 3h21.244q.126-.354.128-.75a2.25 2.25 0 0 0-2.25-2.25zM20.586 16.75H3.414l.858 3.432A.75.75 0 0 0 5 20.75h14a.75.75 0 0 0 .728-.568z"
      />
    </svg>
  );
};
export default Hamburger_01;
