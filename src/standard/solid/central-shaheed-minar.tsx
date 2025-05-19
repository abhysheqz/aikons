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
        d="M21.602 8.202A1 1 0 0 1 22 9v12a1 1 0 1 1-2 0V10.326l-1.5.428V21a1 1 0 1 1-2 0V10a1 1 0 0 1 .725-.962l3.5-1a1 1 0 0 1 .877.164M2.398 8.202A1 1 0 0 0 2 9v12a1 1 0 1 0 2 0V10.326l1.5.428V21a1 1 0 1 0 2 0V10a1 1 0 0 0-.725-.961l-3.5-1a1 1 0 0 0-.877.163M8 8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V9h-4v12a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 22H2a1 1 0 1 1 0-2h20a1 1 0 1 1 0 2M6.172 2.44A1 1 0 0 1 7 2h10a1 1 0 0 1 .929 1.371l-2 5a1 1 0 0 1-1.857-.742L15.523 4H8.477L9.93 7.629a1 1 0 1 1-1.857.742l-2-5a1 1 0 0 1 .1-.932"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CentralShaheedMinar;
