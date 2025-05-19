import React from "react";
const CentralShaheedMinar: React.FC<
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
        d="M22 8.674V22h-2V11.326l-1.5.428V22h-2V10.246zM2 8.674V22h2V11.326l1.5.428V22h2V10.246z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M23 23H1v-2h22z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.188 1.415A1 1 0 0 1 7 1h10a1 1 0 0 1 .949 1.316L16 8.162V22h-2V9h-4v13H8V8.162L6.051 2.316a1 1 0 0 1 .137-.9M9.721 7h4.558l1.334-4H8.387z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CentralShaheedMinar;
