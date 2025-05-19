import React from "react";
const LocationAdd_02: React.FC<
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
        d="M12 1.25c-5.072 0-9.25 3.918-9.25 8.83 0 2.708 1.327 4.707 2.924 6.41.684.73 1.438 1.427 2.17 2.103l.001.001.346.32c.849.786 1.655 1.555 2.344 2.375.75.89 2.176.92 2.95.034.708-.81 1.523-1.58 2.374-2.376l.156-.145c.794-.742 1.614-1.508 2.353-2.316 1.58-1.729 2.882-3.749 2.882-6.405 0-4.913-4.178-8.831-9.25-8.831m1 5.25a1 1 0 1 0-2 0V9H8.5a1 1 0 0 0 0 2H11v2.5a1 1 0 1 0 2 0V11h2.5a1 1 0 1 0 0-2H13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationAdd_02;
