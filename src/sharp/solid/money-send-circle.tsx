import React from "react";
const MoneySendCircle: React.FC<
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
        d="M12 3a9 9 0 1 0 8.82 7.199l1.96-.398c.144.711.22 1.447.22 2.199 0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1c.752 0 1.488.076 2.199.22L13.8 3.18A9 9 0 0 0 12 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 8.14a3.2 3.2 0 0 0-1.014.5C9.434 9.052 9 9.7 9 10.5s.434 1.447.986 1.86c.55.414 1.266.64 2.014.64.357 0 .641.11.814.24.173.129.186.231.186.26s-.013.131-.186.26c-.173.13-.457.24-.814.24-.6 0-.917-.289-.982-.426l-1.809.852c.341.724 1.02 1.21 1.791 1.432v.642h2v-.64a3.2 3.2 0 0 0 1.014-.5c.552-.413.986-1.06.986-1.86s-.434-1.447-.986-1.86c-.55-.414-1.266-.64-2.014-.64-.357 0-.641-.11-.814-.24-.173-.129-.186-.231-.186-.26s.013-.131.186-.26c.173-.13.457-.24.814-.24.6 0 .917.289.982.426l1.809-.852C14.45 8.85 13.77 8.364 13 8.14V7.5h-2zM19.582 3.004H17.5v-2h5.496v5.5h-2V4.418l-3.289 3.289-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneySendCircle;
