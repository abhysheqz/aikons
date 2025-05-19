import React from "react";
const LocationFavourite_02: React.FC<
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
        d="M12 1.25c-5.072 0-9.25 3.918-9.25 8.83 0 2.708 1.327 4.707 2.924 6.41.684.73 1.438 1.427 2.17 2.103l.001.001.346.32c.849.786 1.655 1.555 2.344 2.375.75.89 2.176.92 2.95.034.708-.81 1.523-1.58 2.374-2.376l.156-.145c.794-.742 1.614-1.508 2.353-2.316 1.58-1.729 2.882-3.749 2.882-6.405 0-4.913-4.178-8.831-9.25-8.831m0 5.934s1.146-1.227 2.743-.394c1.934 1.008 2.073 4.957-2.743 6.71-4.816-1.753-4.677-5.702-2.743-6.71 1.597-.833 2.743.394 2.743.394"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationFavourite_02;
