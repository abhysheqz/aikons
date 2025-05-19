import React from "react";
const Alms: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.462 3.994C15.97 3.994 18 6.003 18 8.481s-2.031 4.487-4.538 4.487c-2.223 0-4.073-1.581-4.462-3.67M22 13.965h-3l-2.5 1.371h-1c-1.5 0-2.5 1.146-2.5 2.12l3 .996 3-.997m-5.999-.498-4.211-1.4a2 2 0 0 0-2.49 1.151l-.299.747 9 4.487 7-1.974"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.007 4.5c1.408 0 3.136-1.358 5.357-2.284 1.022-.426 2.174-.328 3.194.101.306.129.59.259.96.456.86.456 2.57 1.286 2.57 1.286s-1.202.03-1.987.401c-.858.406-2.217 1.987-2.217 1.987m-7.882 4.542H5.97l3.05-1.532h2.461c.834 0 1.51-.674 1.51-1.505s-.676-1.505-1.51-1.505H8.286"
      />
    </svg>
  );
};
export default Alms;
