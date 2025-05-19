import React from "react";
const Telescope_02: React.FC<
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
        d="M16.443 1.57a2.386 2.386 0 0 1 3.26.874L22.43 7.17a2.387 2.387 0 0 1-4.133 2.386L15.57 4.831a2.387 2.387 0 0 1 .873-3.26"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 11.75a1 1 0 0 1 .874.514l5 9a1 1 0 1 1-1.748.972l-4.126-7.427-4.126 7.427a1 1 0 1 1-1.748-.972l5-9a1 1 0 0 1 .874-.514"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.711 14.42a2.776 2.776 0 0 0 3.778.943l6.918-4.09c.203-.12.305-.18.321-.268.017-.09-.062-.19-.221-.393a4 4 0 0 1-.293-.432l-2.726-4.726a3.7 3.7 0 0 1-.297-.655c-.09-.265-.135-.398-.224-.431-.09-.033-.2.032-.42.162L6.646 8.61c-1.34.791-1.787 2.53-1.024 3.885l.105.185-2.344 1.328-.253-.47a1 1 0 1 0-1.76.95l1.477 2.736a1 1 0 1 0 1.76-.95l-.273-.506z"
      />
    </svg>
  );
};
export default Telescope_02;
