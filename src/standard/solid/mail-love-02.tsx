import React from "react";
const MailLove_02: React.FC<
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
        d="M1 4.75A2.75 2.75 0 0 1 3.75 2h16a2.75 2.75 0 0 1 2.75 2.75v7.159a4.7 4.7 0 0 0-1.11-.816c-1.598-.846-3.088-.662-4.14-.219-1.052-.443-2.543-.627-4.14.219-2.183 1.156-2.991 3.731-2.438 6.03.2.836.57 1.637 1.1 2.377H3.75A2.75 2.75 0 0 1 1 16.75zm4.102 1.622a.75.75 0 0 1 1.026-.27l4.992 2.912c.39.227.87.227 1.26 0l4.992-2.912a.75.75 0 0 1 .756 1.296l-4.992 2.912c-.856.5-1.915.5-2.771 0L5.371 7.398a.75.75 0 0 1-.27-1.026"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.25 12.57a3.6 3.6 0 0 0-.577-.31c-.716-.304-1.728-.442-2.86.158-1.453.77-2.111 2.572-1.683 4.354.438 1.82 1.974 3.615 4.86 4.681a.75.75 0 0 0 .52 0c2.885-1.066 4.422-2.86 4.86-4.681.428-1.782-.23-3.584-1.683-4.354-1.133-.6-2.145-.462-2.86-.159a3.6 3.6 0 0 0-.577.31"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailLove_02;
