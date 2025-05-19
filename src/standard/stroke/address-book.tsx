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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 5a3 3 0 0 0-3-3H7.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 6H2m2.5 6H2m2.5 6H2M16 16a5 5 0 1 1 1.894-2.972c-.127.608-.711.972-1.332.972-.863 0-1.562-.7-1.562-1.562V10m0 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
export default AddressBook;
