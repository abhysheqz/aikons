import React from "react";
const SpartanHelmet: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.583 16.062C21.242 9.55 18.033 4.574 12 2 5.965 4.574 2.76 9.55 4.417 16.062L3 20.118c2.924 3.98 6.877.776 7.253-1.625.265-1.695-.694-1.973-1.947-2.615 0 0-1.564-.534-1.564-2.135 0-1.179.933-2.135 2.085-2.135.721 0 1.357.21 1.987.89l1.185 1.053 1.187-1.053c.63-.68 1.266-.89 1.987-.89 1.152 0 2.085.956 2.085 2.135 0 1.601-1.564 2.135-1.564 2.135-1.253.642-2.212.92-1.947 2.615.376 2.401 4.329 5.605 7.253 1.625zM10 20h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M12 8h.009"
      />
    </svg>
  );
};
export default SpartanHelmet;
