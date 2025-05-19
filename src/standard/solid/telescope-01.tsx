import React from "react";
const Telescope_01: React.FC<
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
        d="M17.628 1.349a.75.75 0 0 1 1.02.273l3.5 6a.75.75 0 0 1-.276 1.03l-7 4a.75.75 0 0 1-1.02-.274l-3.5-6a.75.75 0 0 1 .276-1.03z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.986 9.142 5-3 1.028 1.715-4.126 2.477 1.44 2.303 4.158-2.495 1.028 1.715-5 3a1 1 0 0 1-1.362-.327l-2.5-4a1 1 0 0 1 .334-1.388"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.031 9.99a.75.75 0 0 1 .49.337l1.604 2.556a.75.75 0 0 1-.303 1.07l-4.49 2.22a.75.75 0 0 1-1.003-.338l-1-2a.75.75 0 0 1 .235-.946l3.886-2.774a.75.75 0 0 1 .581-.125M12 11.5a1 1 0 0 1 .904.572l4.5 9.5a1 1 0 1 1-1.808.856L12 14.836l-3.596 7.592a1 1 0 1 1-1.808-.856l4.5-9.5A1 1 0 0 1 12 11.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Telescope_01;
