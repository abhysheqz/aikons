import React from "react";
const Spotify: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M7.292 9.6a10.8 10.8 0 0 1 4.207-.85c2.257 0 4.35.69 6.078 1.87l.845-1.24a12.24 12.24 0 0 0-6.923-2.13c-1.699 0-3.319.344-4.792.968zm.446 3.18c1.023-.344 2.12-.53 3.261-.53 1.887 0 3.653.51 5.17 1.397l.758-1.294a11.7 11.7 0 0 0-5.928-1.603 11.7 11.7 0 0 0-3.738.607zm1.091 3.259a8.3 8.3 0 0 1 2.172-.289c1.365 0 2.65.33 3.783.916l.689-1.332A9.7 9.7 0 0 0 11 14.25a9.8 9.8 0 0 0-2.566.341z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spotify;
