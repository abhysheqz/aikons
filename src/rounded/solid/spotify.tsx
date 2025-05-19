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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M7.292 9.6a10.8 10.8 0 0 1 4.208-.85c2.257 0 4.35.69 6.078 1.87a.75.75 0 1 0 .845-1.24A12.24 12.24 0 0 0 11.5 7.25c-1.699 0-3.319.344-4.792.968a.75.75 0 1 0 .584 1.381m.447 3.18c1.023-.344 2.12-.53 3.261-.53 1.887 0 3.653.51 5.17 1.397a.75.75 0 0 0 .758-1.294A11.7 11.7 0 0 0 11 10.75a11.7 11.7 0 0 0-3.738.607.75.75 0 0 0 .477 1.423m1.09 3.259a8.3 8.3 0 0 1 2.173-.289c1.365 0 2.65.33 3.783.916a.75.75 0 1 0 .689-1.332 9.7 9.7 0 0 0-4.472-1.084c-.887 0-1.748.119-2.566.341a.75.75 0 0 0 .394 1.448"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spotify;
