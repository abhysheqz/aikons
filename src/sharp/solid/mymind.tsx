import React from "react";
const Mymind: React.FC<
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
        d="M15.786 3.125c1.998 1.54 3.62 3.922 4.431 6.776s.672 5.692-.248 7.981c-.922 2.292-2.646 4.069-4.996 4.662-2.344.593-4.762-.13-6.758-1.669-1.998-1.539-3.621-3.922-4.432-6.776-.81-2.853-.672-5.692.248-7.981.922-2.292 2.646-4.069 4.996-4.662 2.344-.593 4.762.13 6.759 1.669M13.5 17l-2-10 5 8.5zm-5-7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mymind;
