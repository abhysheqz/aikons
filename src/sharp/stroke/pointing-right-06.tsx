import React from "react";
const PointingRight_06: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16 4.5h5.4M19.5 2 22 4.5 19.5 7M15.974 12.702H12.98m2.994 0v1.687m0-1.687h3.169c.272 0 1.399.057 1.84-.08.997-.425 1.303-1.635.662-2.436-.272-.34-.797-.581-1.181-.581H9.866m6.108 4.784c0 .764-.583 1.224-1.438 1.471l-.059 1.593m1.497-3.064a1.496 1.496 0 0 1-1.491 1.389h-2.511M2 10.127h2.002c1.77-1.438 2.654-2.332 4.325-3.41 2.205-1.57 4.085-.333 6.576 2.888m-.426 7.848c.029.689-.83 1.438-1.44 1.55l-.072 1.713c-.086.987-1.123 1.343-1.936 1.278l-3.113-.047c-2.039.047-3.012-1.369-3.902-2.094H2.016m12.461-2.4-.036.197c-.13.712-.749 1.23-1.472 1.23h-1.97"
      />
    </svg>
  );
};
export default PointingRight_06;
