import React from "react";
const Tailwindcss: React.FC<
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
        d="M12 6c-3.6 0-4.833 2.667-5 4 0 0 .819-1.588 2.863-1.588 2.5 0 2.704 3.588 7.204 3.588 3.645 0 4.766-2.483 4.933-3.724 0 0-.78 1.403-2.78 1.403C16.73 9.679 16.413 6 12 6M7 12c-3.6 0-4.833 2.667-5 4 0 0 .819-1.588 2.863-1.588 2.5 0 2.704 3.588 7.204 3.588 3.645 0 4.766-2.483 4.933-3.725 0 0-.78 1.404-2.78 1.404C11.73 15.679 11.413 12 7 12"
      />
    </svg>
  );
};
export default Tailwindcss;
