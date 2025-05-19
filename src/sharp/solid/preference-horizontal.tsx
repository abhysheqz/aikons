import React from "react";
const PreferenceHorizontal: React.FC<
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
        d="M12.25 1.25h4.5v5.5h-4.5zM7.25 8.75h4.5v5.5h-4.5zM10.25 16.25h4.5v5.5h-4.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 3h10v2H3zM3 18h8v2H3zM16 18h5v2h-5zM11 10.5h10v2H11zM18 3h3v2h-3zM3 10.5h3v2H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PreferenceHorizontal;
