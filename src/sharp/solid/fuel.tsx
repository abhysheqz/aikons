import React from "react";
const Fuel: React.FC<
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
        d="M4.25 3.5A.75.75 0 0 1 5 2.75h4a.75.75 0 0 1 .75.75V6h-1.5V4.25h-2.5V6h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 2a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V6A.75.75 0 0 1 3 5.25h8.25zm7.25 4h-4V4h4zm-4.102 5.88c-.543-.604-1.959-1.878-2.398-2.27-.44.392-1.855 1.666-2.398 2.27a7.2 7.2 0 0 0-.916 1.232c-.244.432-.436.93-.436 1.452 0 1.75 1.43 3.546 3.75 3.546s3.75-1.796 3.75-3.546c0-.523-.192-1.02-.436-1.452a7.2 7.2 0 0 0-.916-1.231"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fuel;
