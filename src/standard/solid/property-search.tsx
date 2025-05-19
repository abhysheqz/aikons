import React from "react";
const PropertySearch: React.FC<
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
        d="M13 17.6a4.6 4.6 0 1 1 8.483 2.467l1.225 1.227a1 1 0 1 1-1.416 1.412l-1.223-1.224A4.6 4.6 0 0 1 13 17.6m4.6-2.6a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 1.25A3.75 3.75 0 0 0 1.25 5v1.25h20.5V5A3.75 3.75 0 0 0 18 1.25zm16.75 6.5H1.25V18A3.75 3.75 0 0 0 5 21.75h8.13a6.1 6.1 0 0 1 8.62-8.62zM6 10.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h2.256a.75.75 0 0 0 0-1.5zm-4 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertySearch;
