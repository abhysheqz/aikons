import React from "react";
const Perspective: React.FC<
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
        d="M13 18.89V13h7.251v6a.75.75 0 0 1-.849.743zM11 18.623l-6.6-.88A.75.75 0 0 1 3.75 17v-4H11zM3.75 11H11V5.377l-6.6.88A.75.75 0 0 0 3.75 7zM13 5.11V11h7.251V5a.75.75 0 0 0-.849-.743zM13 18.89l-2-.267V22h2zM20.251 13v-2H22v2zM13 5.11V2h-2v3.377zM3.75 11H2v2h1.75z"
      />
    </svg>
  );
};
export default Perspective;
