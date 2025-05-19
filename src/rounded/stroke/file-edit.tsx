import React from "react";
const FileEdit: React.FC<
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
        d="M13 20.827V22h1.173c.41 0 .614 0 .799-.076.184-.076.328-.221.618-.51l4.823-4.825c.273-.273.41-.41.483-.556.139-.28.139-.61 0-.89-.073-.147-.21-.283-.483-.556s-.41-.41-.556-.483a1 1 0 0 0-.89 0c-.147.073-.284.21-.557.483l-4.823 4.824c-.29.289-.434.434-.51.618s-.077.388-.077.798Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11s0-1.57-.152-1.937-.441-.657-1.02-1.235l-4.736-4.736c-.499-.499-.748-.748-1.058-.896a2 2 0 0 0-.197-.082C11.514 2 11.161 2 10.456 2c-3.245 0-4.868 0-5.967.886a4 4 0 0 0-.603.603C3 4.59 3 6.211 3 9.456V14c0 3.771 0 5.657 1.172 6.828C5.235 21.892 6.886 21.99 10 22M12 2.5V3c0 2.828 0 4.243.879 5.121C13.757 9 15.172 9 18 9h.5"
      />
    </svg>
  );
};
export default FileEdit;
