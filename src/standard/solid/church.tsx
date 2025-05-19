import React from "react";
const Church: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .75.75v1.248H14a.75.75 0 0 1 0 1.5h-1.25v2.249a.75.75 0 0 1-1.5 0V4.748H10a.75.75 0 0 1 0-1.5h1.25V2a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m5.05 12.137-1.28.64a2.75 2.75 0 0 0-1.52 2.46V22c0 .414.336.75.75.75h2.2a1.9 1.9 0 0 1-.15-.75zM18.8 22.75H21a.75.75 0 0 0 .75-.75v-6.764a2.75 2.75 0 0 0-1.52-2.46l-1.28-.64V22c0 .266-.053.52-.15.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.614 6.357a.75.75 0 0 1 .772 0l5 3a.75.75 0 0 1 .364.643v12a.75.75 0 0 1-.75.75h-2.25V18a2.75 2.75 0 1 0-5.5 0v4.75H7a.75.75 0 0 1-.75-.75V10a.75.75 0 0 1 .364-.643zM10.75 22.75h2.5V18a1.25 1.25 0 1 0-2.5 0zM11 11.992a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Church;
