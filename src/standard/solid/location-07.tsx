import React from "react";
const Location_07: React.FC<
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
        d="M2.75 10.08c0-4.912 4.178-8.83 9.25-8.83s9.25 3.918 9.25 8.83c0 2.657-1.302 4.677-2.882 6.406-.74.808-1.56 1.574-2.353 2.316l-.156.145c-.85.796-1.666 1.566-2.373 2.376-.775.886-2.202.857-2.95-.034-.69-.82-1.496-1.589-2.345-2.375l-.346-.32c-.733-.677-1.487-1.373-2.171-2.104-1.597-1.703-2.924-3.702-2.924-6.41"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_07;
