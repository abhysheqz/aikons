import React from "react";
const Audit_01: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21 22h-9v-2l3.5-1h2l3.5 1zM7 7h8m-8 4h4M19 10.5V2H3v20h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.271 18.683c-.061-1.46-.874-3.029-.761-3.9.126-.973.702-1.322.987-1.512.364-.237 1.416-.59 2.415.305.338.29.844 1.143.438 2.378-.208.83-.627 1.784-.578 2.768"
      />
    </svg>
  );
};
export default Audit_01;
