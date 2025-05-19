import React from "react";
const CheckUnread_01: React.FC<
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
        d="M19.938 6.652a1 1 0 0 1-.59 1.286c-1.221.453-2.57 1.466-3.91 2.777a1 1 0 1 1-1.398-1.43c1.408-1.377 2.997-2.623 4.612-3.222a1 1 0 0 1 1.285.59M13.115 11.707a1 1 0 0 1 .13 1.408 50 50 0 0 0-2.799 3.73 49 49 0 0 0-1.075 1.647l-.012.021-.004.006a1 1 0 0 1-1.75-.071C6.929 17.093 6.16 16.34 5.6 15.934a3.7 3.7 0 0 0-.67-.395 2 2 0 0 0-.186-.072 1 1 0 0 1 .5-1.937 4 4 0 0 1 .5.181c.269.12.627.31 1.033.605.542.395 1.159.97 1.753 1.795l.265-.392a52 52 0 0 1 2.913-3.882 1 1 0 0 1 1.408-.13"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckUnread_01;
