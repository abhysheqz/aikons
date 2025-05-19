import React from "react";
const MailRemove_02: React.FC<
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
        d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 .75.75v12.109l-1.54-1.541-2.794 2.793-2.793-2.793-3.182 3.182 2.793 2.793-1.207 1.207H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.401l6.416-4.277-.832-1.248L12 9.599z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.002 18.543-2.793 2.793 1.414 1.414 2.793-2.793 2.793 2.793 1.414-1.414-2.793-2.793 2.793-2.793-1.414-1.414-2.793 2.793-2.793-2.793-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailRemove_02;
