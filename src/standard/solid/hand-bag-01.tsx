import React from "react";
const HandBag_01: React.FC<
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
        d="M12.102 1c-1.353 0-2.55 1.06-3.368 2.659C8.167 4.769 7.733 6.219 7.512 8H6.1a1.75 1.75 0 0 0-1.75 1.75v4.248h5.018A1.75 1.75 0 0 1 11.1 12.5h2c.881 0 1.61.651 1.732 1.5h5.018V9.75A1.75 1.75 0 0 0 18.1 8h-1.41c-.22-1.78-.654-3.231-1.221-4.341C14.652 2.06 13.454 1 12.102 1m3.076 7c-.209-1.55-.589-2.767-1.045-3.659C13.417 2.94 12.615 2.5 12.102 2.5s-1.316.44-2.032 1.841C9.614 5.233 9.234 6.45 9.025 8zm-5.81 7.498H4.107l-1 3.496A2.75 2.75 0 0 0 5.752 22.5h12.697a2.75 2.75 0 0 0 2.644-3.506l-.998-3.494h-5.262A1.75 1.75 0 0 1 13.1 17h-2a1.75 1.75 0 0 1-1.732-1.502M11.1 14a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h2a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HandBag_01;
