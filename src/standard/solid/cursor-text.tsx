import React from "react";
const CursorText: React.FC<
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
        d="M6.588 6.59A1 1 0 0 1 7.5 6h1a1 1 0 0 1 .912.59l4.5 10a1 1 0 0 1-1.824.82L10.554 14H5.447l-1.535 3.41a1 1 0 0 1-1.824-.82zM6.347 12h3.307L8 8.326zM16.895 4.25a1.9 1.9 0 0 0-.886-.25 1 1 0 0 1-.018-2c.774-.007 1.746.295 2.51.933C19.265 2.298 20.235 2 21 2a1 1 0 0 1 0 2c-.487 0-1.155.288-1.5.772V11h.5a1 1 0 1 1 0 2h-.5v6.229c.146.206.355.384.605.522.325.177.658.251.886.249a1 1 0 0 1 .018 2c-.774.007-1.746-.295-2.51-.933-.764.636-1.734.933-2.499.933a1 1 0 0 1 0-2c.487 0 1.155-.288 1.5-.772V13H17a1 1 0 1 1 0-2h.5V4.772a1.8 1.8 0 0 0-.605-.523"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorText;
