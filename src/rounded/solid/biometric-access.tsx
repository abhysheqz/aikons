import React from "react";
const BiometricAccess: React.FC<
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
        d="M12 2.75A3.75 3.75 0 0 0 8.25 6.5V9a.75.75 0 0 1-1.5 0V6.5a5.25 5.25 0 1 1 10.5 0V9a.75.75 0 0 1-1.5 0V6.5A3.75 3.75 0 0 0 12 2.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.525 8.35c1.429-.066 2.88-.1 4.475-.1 1.596 0 3.046.034 4.475.1 2.058.095 3.729 1.688 4 3.705.149 1.1.275 2.257.275 3.445s-.126 2.344-.274 3.445c-.272 2.017-1.943 3.61-4.001 3.705-1.429.066-2.88.1-4.475.1-1.596 0-3.046-.034-4.475-.1-2.058-.095-3.729-1.688-4-3.705-.149-1.1-.275-2.257-.275-3.445s.126-2.344.275-3.445c.271-2.017 1.942-3.61 4-3.705M12 12.75A3.25 3.25 0 0 0 8.75 16v1.5a.75.75 0 0 1-1.5 0V16a4.75 4.75 0 1 1 9.5 0v1.5a.75.75 0 0 1-1.5 0V16A3.25 3.25 0 0 0 12 12.75M11.25 16a.75.75 0 0 1 1.5 0 .75.75 0 0 0 1.5 0 2.25 2.25 0 0 0-4.5 0v3a.75.75 0 0 0 1.5 0zm3 2a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BiometricAccess;
