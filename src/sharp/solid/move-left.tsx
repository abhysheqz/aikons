import React from "react";
const MoveLeft: React.FC<
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
        d="M22.5 12.5a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.984 11.5H4.471l1.925-2.206L4.873 8 1 12.5 4.873 17l1.524-1.294L4.472 13.5h8.511z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoveLeft;
