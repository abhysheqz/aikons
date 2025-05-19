import React from "react";
const HonourStar: React.FC<
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
        d="M1.75 3.251a1 1 0 0 1 1-1h18.5a1 1 0 1 1 0 2H2.75a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 2.251a.75.75 0 0 0-.75.75v11c0 1.187.104 2.127.562 2.937.459.809 1.21 1.382 2.23 1.993l3.045 1.827c.475.285.879.527 1.233.694.378.177.754.297 1.18.297s.802-.12 1.18-.297c.354-.167.789-.427 1.264-.712l3.014-1.81c1.02-.61 1.771-1.183 2.23-1.992.458-.81.562-1.75.562-2.938V3.001a.75.75 0 0 0-.75-.75zm8.72 6.997-.616-1.242c-.332-.674-.878-.674-1.214 0l-.616 1.242a.76.76 0 0 1-.493.37l-1.117.187c-.714.12-.878.643-.367 1.158l.868.875a.77.77 0 0 1 .182.638l-.249 1.084c-.196.854.26 1.189 1.008.74l1.047-.624a.75.75 0 0 1 .692 0l1.047.625c.752.448 1.204.116 1.008-.741l-.249-1.084a.77.77 0 0 1 .182-.638l.868-.875c.515-.515.347-1.038-.367-1.158l-1.117-.187a.76.76 0 0 1-.497-.37"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HonourStar;
