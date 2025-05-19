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
        d="M22 2H5v20h17zM5 6H2m3 6H2m3 6H2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.48 15.978a4.95 4.95 0 0 1-3 1.007c-2.755 0-4.988-2.245-4.988-5.015s2.233-5.015 4.988-5.015 4.988 2.245 4.988 5.015c.08.604-.055 1.907-1.229 2-1.484.118-1.723-1.038-1.78-1.705V9.253M15.492 12A2.003 2.003 0 0 1 13.485 14a2.003 2.003 0 0 1-2.006-1.999c0-1.104.898-1.999 2.006-1.999s2.007.895 2.007 1.999Z"
      />
    </svg>
  );
};
export default AddressBook;
