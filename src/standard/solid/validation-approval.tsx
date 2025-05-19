import React from "react";
const ValidationApproval: React.FC<
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
        d="M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h4a1 1 0 1 0 0-2H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v6a1 1 0 1 0 2 0V4a3 3 0 0 0-3-3zm8.253 6.659a1 1 0 0 0-1.506-1.317L7.951 9.537 6.707 8.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.46-.049zM6 14h4a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2m0 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.002 15.5a2.5 2.5 0 1 1 4.956.47c-.07.373-.206.73-.342 1.087-.132.348-.264.695-.336 1.057a.48.48 0 0 1-.47.385h-2.615a.48.48 0 0 1-.47-.385c-.072-.362-.204-.71-.336-1.057-.136-.357-.271-.714-.342-1.087a2.5 2.5 0 0 1-.045-.47m3.87 4h-2.739c-.065 0-.098 0-.13.004a1 1 0 0 0-.127.03l-2.37.632a1.92 1.92 0 0 0-1.504 1.874c0 .53.43.96.96.96h9.08c.53 0 .96-.43.96-.96 0-.9-.625-1.679-1.503-1.874l-2.37-.632a1 1 0 0 0-.127-.03c-.033-.004-.065-.004-.13-.004"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ValidationApproval;
