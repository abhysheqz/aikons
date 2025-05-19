import React from "react";
const NewTwitterEllipse: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-5 5a.75.75 0 0 0-.608 1.19l3.82 5.288L6.47 16.47a.75.75 0 1 0 1.06 1.06l3.571-3.57 2.513 3.48a.75.75 0 0 0 .608.31H17a.75.75 0 0 0 .608-1.19l-3.82-5.288L17.53 7.53a.75.75 0 0 0-1.06-1.06l-3.571 3.57-2.513-3.48a.75.75 0 0 0-.608-.31z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NewTwitterEllipse;
