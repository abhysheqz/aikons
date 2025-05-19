import React from "react";
const MailVoice_02: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75v12a2.75 2.75 0 0 0 2.75 2.75h9.16a5 5 0 0 1-.224-.339 2.5 2.5 0 0 1-.435-1.353 2.5 2.5 0 0 1 1.999-2.528v-1.55a4 4 0 1 1 8 0v1.55q.126.027.25.065V4.75A2.75 2.75 0 0 0 19.75 2zm2.378 4.102a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296L12.38 9.014a1.25 1.25 0 0 1-1.26 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.75 13.429a2.5 2.5 0 0 1 5 0v1.587a2.5 2.5 0 1 1-5 0zm-1.447 3.426a1 1 0 0 1 1.342.448c.134.269.488.644 1.026.96.527.31 1.103.487 1.58.487.476 0 1.052-.178 1.578-.487.538-.316.892-.691 1.027-.96a1 1 0 1 1 1.788.894c-.365.73-1.063 1.356-1.801 1.79a5.7 5.7 0 0 1-1.593.644v1.119a1 1 0 1 1-2 0v-1.12a5.7 5.7 0 0 1-1.593-.643c-.738-.434-1.436-1.06-1.801-1.79a1 1 0 0 1 .447-1.342"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailVoice_02;
