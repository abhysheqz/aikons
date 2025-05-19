import React from "react";
const AiVisionRecognition: React.FC<
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
        d="m22.686 12.12.064-.144-.072-.14c-.087-.17-.222-.434-.263-.506a17.355 17.355 0 0 0-2.496-3.35c-1.747-1.825-4.411-3.73-7.924-3.73-3.751 0-6.419 1.895-8.121 3.74a15 15 0 0 0-1.88 2.533 13 13 0 0 0-.458.84c-.036.074-.152.334-.225.5L1.25 12c.008.017.03.07.061.137.073.166.189.426.225.5a15.128 15.128 0 0 0 2.338 3.374c1.702 1.844 4.37 3.739 8.12 3.739 3.752 0 6.42-1.895 8.122-3.74a15 15 0 0 0 1.879-2.533c.204-.345.357-.635.459-.84.036-.074.155-.344.232-.517M12.314 8.85 12 8l-.314.85a4.8 4.8 0 0 1-2.836 2.836L8 12l.85.314a4.8 4.8 0 0 1 2.836 2.836L12 16l.314-.85a4.8 4.8 0 0 1 2.836-2.836L16 12l-.85-.314a4.8 4.8 0 0 1-2.836-2.836"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiVisionRecognition;
