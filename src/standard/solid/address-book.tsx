import React from "react";
const AddressBook: React.FC<
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
        d="M1 5.75a1 1 0 0 1 1-1h2.5a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 1a3.75 3.75 0 0 0-3.75 3.75v14A3.75 3.75 0 0 0 7.5 22.5H19a3.75 3.75 0 0 0 3.75-3.75v-14A3.75 3.75 0 0 0 19 1zm1.25 10.75a4.25 4.25 0 1 1 8.41.875c-.036.171-.233.375-.598.375a.81.81 0 0 1-.812-.812V9.75a.75.75 0 0 0-1.39-.39 2.75 2.75 0 1 0 .511 4.406 2.3 2.3 0 0 0 1.69.734c.878 0 1.85-.525 2.067-1.569q.121-.573.122-1.181a5.75 5.75 0 1 0-2.299 4.6.75.75 0 1 0-.901-1.2 4.25 4.25 0 0 1-6.8-3.4M13 10.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddressBook;
