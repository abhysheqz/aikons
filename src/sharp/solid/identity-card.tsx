import React from "react";
const IdentityCard: React.FC<
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
        d="M22.75 2.75H1.25v18.5h21.5zM11.696 15.721c-1.373-3.421-6.122-3.166-7.392 0l-.413 1.03h8.218zM6 9.75a2 2 0 1 1 4 0 2 2 0 0 1-4 0m13.75-2h-6.5v1.5h6.5zm0 3.5h-6.5v1.5h6.5zm-2.5 3.5h-4v1.5h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default IdentityCard;
