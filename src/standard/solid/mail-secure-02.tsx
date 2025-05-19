import React from "react";
const MailSecure_02: React.FC<
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
        d="M1 4.75A2.75 2.75 0 0 1 3.75 2h16a2.75 2.75 0 0 1 2.75 2.75v7.41a2.6 2.6 0 0 0-.921-.354 7.1 7.1 0 0 1-2.056-.736 2.66 2.66 0 0 0-2.547 0 7.1 7.1 0 0 1-2.055.736 2.634 2.634 0 0 0-2.171 2.589v1.971c0 1.25.39 2.296.918 3.134H3.75A2.75 2.75 0 0 1 1 16.75zm5.128 1.352a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296L12.38 9.014a1.25 1.25 0 0 1-1.26 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.574 12.168c.421-.23.93-.23 1.352 0a8.4 8.4 0 0 0 2.433.869 1.384 1.384 0 0 1 1.141 1.358v1.971c0 1.555-.773 2.73-1.59 3.532a8.2 8.2 0 0 1-2.13 1.478c-.337.16-.723.16-1.06 0a8.2 8.2 0 0 1-2.13-1.479c-.817-.802-1.59-1.976-1.59-3.53v-1.972c0-.687.502-1.244 1.141-1.358a8.4 8.4 0 0 0 2.433-.869"
      />
    </svg>
  );
};
export default MailSecure_02;
