import React from "react";
const NewTwitter: React.FC<
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
      <path fill="currentColor" d="M1.75 2.25h6.417l14.083 19.5h-6.417z" />
      <path fill="currentColor" d="M22.25 2.25 4.454 21.75H1.75l17.795-19.5z" />
    </svg>
  );
};
export default NewTwitter;
