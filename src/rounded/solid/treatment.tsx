import React from "react";
const Treatment: React.FC<
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
        d="M10.726 1.928a2.66 2.66 0 0 1 3.548 0c.69.618 1.543 1.477 2.23 2.472.678.984 1.246 2.175 1.246 3.439 0 2.458-2.032 4.911-5.25 4.911s-5.25-2.453-5.25-4.911c0-1.264.567-2.455 1.247-3.44.686-.994 1.54-1.853 2.229-2.471M5.955 13.25c-.433 0-.83 0-1.152.043-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v2.609c0 .328 0 .635.03.892.033.286.11.587.318.864.207.278.473.437.738.55.238.102.532.19.847.283l4.999 1.484c.724.215 1.5.121 2.156-.257l7.515-4.336c.933-.539 1.174-1.78.552-2.64a2.735 2.735 0 0 0-3.034-1.032h-.001l-2.126.654c-.248.076-.373.114-.412.186s.008.235.1.562c.072.25.08.489.068.623 0 .982-.669 1.774-1.533 2.013l-2.541.702a3.95 3.95 0 0 1-2.772-.25l-1.62-.784a.625.625 0 1 1 .544-1.125l1.62.784a2.7 2.7 0 0 0 1.895.17l2.54-.702a.84.84 0 0 0 .617-.808c0-1.413-1.177-1.772-2.576-1.772h-1.042c-.182 0-.36-.04-.521-.119l-2.042-.988a2.7 2.7 0 0 0-1.174-.268z"
      />
    </svg>
  );
};
export default Treatment;
