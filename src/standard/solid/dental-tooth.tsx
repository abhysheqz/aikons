import React from "react";
const DentalTooth: React.FC<
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
        d="m12 4.174.161-.156c2.608-2.585 6.269-2.137 8.03.064l.02.024c.257.321.654.816.975 1.545.332.751.574 1.723.564 3.003-.02 2.54-1.03 6.275-4.24 11.955-.405.718-1.19 1.141-2.006 1.141a2.384 2.384 0 0 1-2.386-2.284c-.03-.873-.13-1.731-.362-2.349s-.49-.764-.756-.764c-.265 0-.524.145-.756.764-.232.618-.332 1.476-.362 2.35a2.384 2.384 0 0 1-2.386 2.283c-.816 0-1.6-.423-2.007-1.141-3.195-5.654-4.21-9.382-4.238-11.92-.015-1.28.221-2.253.55-3.008.323-.745.726-1.248.988-1.574l.02-.025c1.761-2.2 5.422-2.649 8.03-.064z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DentalTooth;
