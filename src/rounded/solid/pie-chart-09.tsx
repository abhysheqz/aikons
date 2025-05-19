import React from "react";
const PieChart_09: React.FC<
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
        d="M14.18 2.645c.987.31 1.93.764 2.797 1.353a10.9 10.9 0 0 1 3.956 4.898 11.06 11.06 0 0 1-.373 9.161c-.252.498-.52 1.026-.801 1.377-.334.415-.748.694-1.326.788-.617.102-1.128-.084-1.593-.405-.41-.283-.843-.713-1.326-1.195l-3.345-3.331c-.79-.786-1.336-1.33-1.628-2.037s-.292-1.48-.291-2.603V5.893c0-.69 0-1.302.088-1.797.099-.556.323-1.051.822-1.425.47-.351.956-.459 1.486-.41.447.042 1.008.218 1.534.384"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.913 5.239a.75.75 0 0 1-.442.964 7.25 7.25 0 1 0 5.247 13.52.75.75 0 1 1 .563 1.39A8.75 8.75 0 1 1 7.948 4.797a.75.75 0 0 1 .965.443"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PieChart_09;
