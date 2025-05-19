import React from "react";
const Rainbow: React.FC<
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
        d="M12.838 14.034c-1.478.39-2.588 1.705-2.588 3.3 0 1.908 1.589 3.416 3.5 3.416h5.775c1.76 0 3.225-1.389 3.225-3.15 0-1.511-1.08-2.748-2.497-3.069-.206-1.862-1.827-3.281-3.753-3.281-1.752 0-3.248 1.171-3.662 2.784"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.283 10.054c-.867-3.827-4.234-6.804-8.408-6.804C5.072 3.25 1.25 7.285 1.25 12v3c0 .413.336.75.75.75h2.25V12A5.75 5.75 0 0 1 10 6.25q.036 0 .07.002a5.75 5.75 0 0 1 5.16 3.65 5.36 5.36 0 0 1 3.053.152"
      />
      <path
        fill="currentColor"
        d="M11.125 13.149v-1.15a1.25 1.25 0 0 0-1.187-1.248 1.25 1.25 0 0 0-1.188 1.248v3a.75.75 0 0 1-.75.75H5.75V12a4.25 4.25 0 0 1 4.188-4.25 4.25 4.25 0 0 1 3.899 2.71 5.2 5.2 0 0 0-2.176 2.407 5 5 0 0 0-.536.283"
      />
    </svg>
  );
};
export default Rainbow;
