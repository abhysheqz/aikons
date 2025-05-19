import React from "react";
const RecoveryMail: React.FC<
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
        d="M1.25 2.25h21.5v9.25h-3.343v.623a5.5 5.5 0 0 0-5.6 8.627H1.25zM6.416 6.5l-.832 1.248L12 12.025l6.416-4.277-.832-1.248L12 10.223z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.157 12.75v3.948l-3.68.26-.106-1.496 1.589-.112a2.75 2.75 0 1 0-1.716 4.9c1.03 0 1.735-.407 2.19-.811a3.4 3.4 0 0 0 .616-.734l.023-.04.002-.005.334-.666 1.341.67-.335.671-.67-.335.67.335v.002l-.002.002-.002.003-.005.01-.014.028-.05.087a4.843 4.843 0 0 1-.913 1.094c-.67.595-1.715 1.188-3.185 1.188a4.25 4.25 0 1 1 2.413-7.748V12.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RecoveryMail;
