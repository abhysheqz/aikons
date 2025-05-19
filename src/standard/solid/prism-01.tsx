import React from "react";
const Prism_01: React.FC<
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
        d="M10.25 4.087c.762-1.371 2.735-1.371 3.497 0l2.126 3.827a1 1 0 1 1-1.748.971L11.999 5.06l-2.52 4.535 8.988 3.852a2 2 0 0 1 .96.867l2.62 4.715C22.789 20.361 21.825 22 20.3 22H3.7c-1.526 0-2.49-1.639-1.75-2.972z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.978 6.79a1 1 0 0 1-.769 1.188l-7.975 1.709 7.376.82a1 1 0 0 1-.22 1.987l-6.793-.755 7.797 3.342a1 1 0 1 1-.788 1.838l-14-6a1 1 0 0 1 .184-1.897l14-3a1 1 0 0 1 1.188.768"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.986 9.836a1 1 0 0 1-.822 1.15l-6 1a1 1 0 1 1-.328-1.972l6-1a1 1 0 0 1 1.15.822"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Prism_01;
