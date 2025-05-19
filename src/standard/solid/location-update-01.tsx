import React from "react";
const LocationUpdate_01: React.FC<
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
        d="M12 6.25a5.25 5.25 0 0 0-5.25 5.25c0 1.707.897 3.066 1.857 4.033.964.97 2.063 1.623 2.644 1.932.47.25 1.028.25 1.498 0 .581-.31 1.68-.962 2.644-1.932.96-.967 1.857-2.326 1.857-4.033 0-2.9-2.35-5.25-5.25-5.25M12 10a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a9 9 0 0 0-8.252 5.4 1 1 0 1 1-1.832-.8A11 11 0 0 1 12 1c5.19 0 9.539 3.594 10.697 8.428.198.826.303 1.687.303 2.572a1 1 0 0 1-1.242.97l-2-.5a1 1 0 0 1-.487-1.654l1.343-1.433A9.005 9.005 0 0 0 12 3M1.385 11.212a1 1 0 0 1 .858-.182l2 .5a1 1 0 0 1 .53 1.604l-1.34 1.634a9.005 9.005 0 0 0 16.819.832 1 1 0 1 1 1.832.8A11 11 0 0 1 12 23c-5.11 0-9.405-3.484-10.641-8.205A11 11 0 0 1 1 12a1 1 0 0 1 .385-.788"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationUpdate_01;
