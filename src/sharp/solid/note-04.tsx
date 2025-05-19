import React from "react";
const Note_04: React.FC<
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
      <path fill="currentColor" d="m21.75 16.5-6 6v-6z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 3h-3V1.5h-2V3H8V1.5H6V3H3a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h11.25V15h7.5V3.75A.75.75 0 0 0 21 3h-3V1.5h-2zm0 7.501H8v-1.5h8zm-5 6H8v-1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_04;
