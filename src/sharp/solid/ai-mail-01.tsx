import React from "react";
const AiMail_01: React.FC<
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
        d="M1.25 2.25h21.5v13.69l-1.24-.471-.948-2.49h-3.147l-.947 2.49-2.49.946v3.148l2.49.946.092.241H1.25zm5.166 3.625-.832 1.248L12 11.4l6.416-4.277-.832-1.248L12 9.598z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.285 14.229h1.407l.258.697c.362.978.478 1.244.668 1.434s.456.306 1.434.668l.697.257v1.407l-.697.258c-.978.362-1.244.478-1.434.668s-.306.456-.668 1.434l-.258.697h-1.407l-.258-.697c-.361-.978-.477-1.244-.667-1.434s-.456-.306-1.434-.668l-.697-.258v-1.407l.697-.258c.978-.361 1.244-.477 1.434-.667s.306-.456.668-1.434z"
      />
    </svg>
  );
};
export default AiMail_01;
