import React from "react";
const LocationUpdate_02: React.FC<
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
        d="M12 3a9 9 0 0 0-8.252 5.4 1 1 0 1 1-1.832-.8A11 11 0 0 1 12 1c5.06 0 9.32 3.417 10.605 8.067.258.935.395 1.919.395 2.933a1 1 0 0 1-1.447.894l-2-1a1 1 0 0 1-.266-1.595l1.221-1.241A9 9 0 0 0 12 3M1.474 11.15a1 1 0 0 1 .973-.044l2 1a1 1 0 0 1 .254 1.607l-1.22 1.2a9.004 9.004 0 0 0 16.77.687 1 1 0 1 1 1.833.8A11 11 0 0 1 12 23c-5.078 0-9.35-3.44-10.617-8.114C1.133 13.966 1 12.997 1 12a1 1 0 0 1 .474-.85"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6.25c-2.63 0-4.75 2.152-4.75 4.79 0 1.463.674 2.538 1.446 3.42.338.385.711.752 1.061 1.095l.13.128c.397.39.76.756 1.071 1.142.523.65 1.548.673 2.091.022.321-.384.69-.754 1.09-1.15l.043-.043c.378-.375.781-.775 1.145-1.201.763-.893 1.423-1.978 1.423-3.413 0-2.638-2.12-4.79-4.75-4.79m0 3.25a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationUpdate_02;
