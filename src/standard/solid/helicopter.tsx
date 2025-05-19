import React from "react";
const Helicopter: React.FC<
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
        d="M14 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 5H2a1 1 0 0 0-.97 1.243l.86 3.44a2 2 0 0 0 1.39 1.438l5.686 1.624a1 1 0 0 1 .583.447l2.01 3.352A3 3 0 0 0 14.133 18H21a2 2 0 0 0 2-2v-2a7 7 0 0 0-7-7H6.118l-.724-1.447A1 1 0 0 0 4.5 5m16.271 7.5A5 5 0 0 0 16 9h-.909c.162.862.535 1.614 1.076 2.191.732.781 1.835 1.309 3.333 1.309z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.316 16.052a1 1 0 0 1 .633 1.265L15.387 19h2.892l.772-2.316a1 1 0 0 1 1.898.633L20.387 19H21a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2h1.28l.771-2.316a1 1 0 0 1 1.265-.632M10 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Helicopter;
