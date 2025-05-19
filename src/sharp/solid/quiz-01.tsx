import React from "react";
const Quiz_01: React.FC<
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
        d="m12.616 1.487 2.775 2.214h3.983a.95.95 0 0 1 .95.95v3.975l2.189 2.757a.95.95 0 0 1 0 1.26l-2.188 2.756v3.958a.95.95 0 0 1-.951.95h-4.16L12.646 22.5a.95.95 0 0 1-1.277.01l-2.73-2.202H4.614a.95.95 0 0 1-.951-.95V15.38l-2.175-2.756a.95.95 0 0 1 0-1.258L3.663 8.61V4.652a.95.95 0 0 1 .95-.951H8.58l2.775-2.214a.95.95 0 0 1 1.262 0M12 8a1 1 0 0 0-1 1v1H9V9a3 3 0 1 1 5.524 1.622 48 48 0 0 1-1.09 1.595c-.17.24-.322.452-.434.607V14.5h-2v-2.326l.192-.263.046-.064a63 63 0 0 0 .563-.786 46 46 0 0 0 1.041-1.521A1 1 0 0 0 12 8m1.001 8h-2.009v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quiz_01;
