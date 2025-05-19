import React from "react";
const Appointment_01: React.FC<
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
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V12H19.8V9.75H4.2v11.046H10v1.954H2.25V3.205h4.388V1.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m21.75 15.242-6.882 7.507-3.945-3.945 1.414-1.415 2.469 2.469 5.47-5.967z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Appointment_01;
