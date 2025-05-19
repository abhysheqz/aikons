import React from "react";
const Table_03: React.FC<
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
        d="M3.5 15a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2h-15a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 4a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2h-.008a6.9 6.9 0 0 1-.765 2.862l-.549 1.054a6.2 6.2 0 0 0-.674 3.05c.026.774.194 1.54.5 2.245l1.12 2.582c.249.573.376 1.199.376 1.83V20a1 1 0 1 1-2 0v-1.378c0-.363-.074-.718-.21-1.033l-1.121-2.582a8.1 8.1 0 0 1-.609-2.257H5.94a8.1 8.1 0 0 1-.609 2.257l-1.12 2.582c-.137.316-.211.67-.211 1.033V20a1 1 0 1 1-2 0v-1.378c0-.63.127-1.256.376-1.83l1.12-2.581a6.2 6.2 0 0 0 .5-2.245 6.2 6.2 0 0 0-.674-3.05l-.55-1.054A6.9 6.9 0 0 1 2.009 5H2a1 1 0 0 1-1-1m9.697 2.722a.75.75 0 0 0-1.393.557c.33.824 1.064 1.471 1.99 1.471h1.412c.927 0 1.66-.647 1.99-1.471a.75.75 0 0 0-1.392-.557c-.16.401-.429.528-.598.528h-1.411c-.17 0-.438-.127-.598-.528"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Table_03;
