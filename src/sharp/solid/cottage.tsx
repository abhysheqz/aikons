import React from "react";
const Cottage: React.FC<
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
        d="M22 21.75H2v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 11a8.75 8.75 0 0 1 17.5 0v10a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zm5.22 3.47a.75.75 0 0 1 .53-.22h6a.75.75 0 0 1 .75.75v6h-1.5v-5.25h-4.5V21h-1.5v-6a.75.75 0 0 1 .22-.53M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cottage;
