import React from "react";
const HospitalBed_01: React.FC<
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
        d="M1 6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v.5a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zM18 14.5H6v-2h12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.406 8.695a1 1 0 0 1 1.399.211l1.23 1.669a4.9 4.9 0 0 1 .545 4.899l-.633 1.43a1 1 0 0 1-1.829-.809l.634-1.43a2.9 2.9 0 0 0-.326-2.903l-1.23-1.668a1 1 0 0 1 .21-1.399m17.188 0a1 1 0 0 1 .21 1.399l-1.23 1.668a2.9 2.9 0 0 0-.326 2.902l.634 1.431a1 1 0 0 1-1.83.81l-.632-1.431a4.9 4.9 0 0 1 .545-4.9l1.23-1.668a1 1 0 0 1 1.399-.21"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 17.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0M19 17.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0M5 4.5V6H3V4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 9 4v2H7V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HospitalBed_01;
