import React from "react";
const NewTwitterRectangle: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM7 6.25a.75.75 0 0 0-.608 1.19l3.82 5.288L6.47 16.47a.75.75 0 1 0 1.06 1.06l3.571-3.57 2.513 3.48a.75.75 0 0 0 .608.31H17a.75.75 0 0 0 .608-1.19l-3.82-5.288L17.53 7.53a.75.75 0 0 0-1.06-1.06l-3.571 3.57-2.513-3.48a.75.75 0 0 0-.608-.31z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NewTwitterRectangle;
