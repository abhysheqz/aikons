import React from "react";
const CreditCardFreeze: React.FC<
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
        d="M18.25 11.25v1.516l1.258-.652.69 1.332-1.948 1.01v1.294h1.294l1.01-1.949 1.332.69-.652 1.259h1.516v1.5h-1.516l.652 1.258-1.332.69-1.01-1.948H18.25v1.294l1.949 1.01-.69 1.332-1.259-.652v1.516h-1.5v-1.516l-1.258.652-.69-1.332 1.948-1.01V17.25h-1.294l-1.01 1.949-1.332-.69.652-1.259H12.25v-1.5h1.516l-.652-1.258 1.332-.69 1.01 1.948h1.294v-1.294l-1.949-1.01.69-1.332 1.259.652V11.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 .75.75v4.25H1.25zM1.25 8.75h21.5v4.5l-1.317-.683L19.75 9.75h-4.5l-1.683 2.817-2.817 1.683v4.5l1.5 1H2a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default CreditCardFreeze;
