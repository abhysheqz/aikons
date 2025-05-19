import React from "react";
const LocationUser_02: React.FC<
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
        d="M12 1.25a3 3 0 0 0-1.59 5.544c-2.935.417-4.719 3.68-3.545 6.564a1.67 1.67 0 0 0 1.543 1.059H8.9l.828 3.485c.253 1.065 1.175 1.848 2.272 1.848s2.019-.783 2.272-1.848l.828-3.485h.492c.688 0 1.287-.431 1.543-1.059 1.174-2.883-.61-6.147-3.545-6.564A3 3 0 0 0 12 1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 17.75a1 1 0 0 1 1 1c0 .076.032.232.262.465.234.238.623.497 1.182.737 1.115.478 2.725.798 4.556.798s3.44-.32 4.556-.798c.56-.24.948-.5 1.182-.737.23-.233.262-.389.262-.465a1 1 0 1 1 2 0c0 .752-.36 1.386-.838 1.87-.474.48-1.11.867-1.818 1.17-1.419.608-3.309.96-5.344.96s-3.925-.352-5.344-.96c-.707-.303-1.344-.69-1.818-1.17C4.36 20.135 4 19.502 4 18.75a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationUser_02;
