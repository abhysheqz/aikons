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
        d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v11.32a4.2 4.2 0 0 0-1.084-.807c-1.416-.734-2.732-.571-3.66-.187l-.005.003-.006-.003c-.927-.384-2.243-.548-3.66.187-1.945 1.008-2.679 3.273-2.18 5.305.167.678.461 1.328.876 1.932H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.901l6.416-4.277-.832-1.248L12 10.099z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.517 13.981c.185.077.347.165.484.25.137-.085.299-.173.484-.25.653-.27 1.576-.393 2.606.142 1.332.69 1.932 2.307 1.541 3.896-.4 1.625-1.794 3.204-4.375 4.138l-.256.093-.257-.093c-2.58-.934-3.975-2.513-4.374-4.138-.391-1.589.209-3.206 1.54-3.896 1.031-.535 1.954-.412 2.607-.142"
      />
    </svg>
  );
};
export default MailLove_02;
