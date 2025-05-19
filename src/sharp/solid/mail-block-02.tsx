import React from "react";
const MailBlock_02: React.FC<
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
        d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v12.009A5.49 5.49 0 0 0 18.5 12.5a5.5 5.5 0 0 0-3.85 1.572A5.5 5.5 0 0 0 13 18c0 .802.172 1.563.48 2.25H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.901l6.416-4.277-.832-1.248L12 10.099z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.671 15.788 3.04 3.04a2.361 2.361 0 0 0-3.04-3.04m1.726 4.397-3.082-3.082a2.361 2.361 0 0 0 3.082 3.082m-3.871-5.22a4.25 4.25 0 1 1 5.949 6.071 4.25 4.25 0 0 1-5.95-6.072"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailBlock_02;
