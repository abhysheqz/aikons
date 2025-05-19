import React from "react";
const Bank: React.FC<
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
        d="M12.335 1.08a.75.75 0 0 0-.67 0l-10 5a.75.75 0 0 0-.415.67V9.5h21.5V6.75a.75.75 0 0 0-.415-.67zM13 5.75h-2v2h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 19.25A.75.75 0 0 1 2 18.5h20a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM20.75 11h-5.5v6h5.5zM8.75 11h-5.5v6h5.5z"
      />
    </svg>
  );
};
export default Bank;
