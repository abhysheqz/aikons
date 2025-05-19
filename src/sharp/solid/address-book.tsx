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
        d="M4.25 2A.75.75 0 0 1 5 1.25h17a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-3h-3v-2h3v-4h-3v-2h3V7h-3V5h3zm5.002 10a4.25 4.25 0 1 1 8.5 0v.5a.75.75 0 0 1-1.5 0V9.25h-1.5v.3a2.75 2.75 0 1 0 .602 4.483 2.25 2.25 0 0 0 3.897-1.532V12a5.75 5.75 0 1 0-2.298 4.6l-.901-1.2a4.25 4.25 0 0 1-6.8-3.4m4.25-1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddressBook;
