import React from "react";
const Note: React.FC<
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
        d="M12.481 1.351a2.67 2.67 0 0 0-3.297 1.88L6.346 13.645a2.7 2.7 0 0 0 1.758 3.279l8.326 2.697c1.463.474 3.007-.39 3.397-1.873L22.66 6.995c.373-1.416-.446-2.885-1.859-3.285zm.682 4.917a.75.75 0 0 0-.326 1.464l4.5 1a.75.75 0 1 0 .326-1.464zm-1.016 3.997a.75.75 0 0 0-.294 1.47l2.5.5a.75.75 0 0 0 .294-1.47z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.099 9.735C.599 7.825 2.066 6 4.019 6h1.43a1 1 0 0 1 0 2h-1.43c-.684 0-1.144.625-.986 1.227l2.892 11.03c.133.508.665.842 1.216.717l4.639-1.054a1 1 0 1 1 .443 1.95l-4.638 1.054c-1.58.359-3.182-.584-3.595-2.16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note;
