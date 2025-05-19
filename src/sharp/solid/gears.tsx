import React from "react";
const Gears: React.FC<
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
        d="M10.375 3.524a4 4 0 0 0-.349-.204l-.342-2.07H6.319l-.343 2.07a4 4 0 0 0-.35.204l-1.953-.737L2 5.708l1.606 1.333a5 5 0 0 0 0 .42L2.002 8.792l1.673 2.922 1.953-.737q.169.108.348.203l.343 2.07h3.365l.342-2.07q.18-.094.348-.203l1.95.737 1.674-2.922-1.602-1.33a4 4 0 0 0 0-.423L14 5.71l-1.673-2.922zM8 5.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4M18.375 13.024a4 4 0 0 0-.349-.204l-.342-2.07h-3.365l-.343 2.07q-.18.095-.35.204l-1.953-.737L10 15.208l1.606 1.333a4 4 0 0 0 0 .42l-1.604 1.331 1.673 2.922 1.953-.737q.169.108.348.203l.343 2.07h3.365l.342-2.07q.18-.094.348-.203l1.95.737 1.674-2.922-1.602-1.33a4 4 0 0 0 0-.423L22 15.21l-1.673-2.922zM16 14.75a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gears;
