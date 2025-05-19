import React from "react";
const Webhook: React.FC<
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
        d="M9 7.5a3 3 0 0 1 6 0v1h2v-1a5 5 0 1 0-8.253 3.797l-1.923 3.462a1.75 1.75 0 1 0 1.748.971l2.845-5.12-.873-.486A3 3 0 0 1 9 7.5m1.25 0a1.75 1.75 0 1 1 3.322.77l1.923 3.461a5 5 0 1 1-1.62 8.672l-.78-.625 1.25-1.56.78.625a3 3 0 1 0 .418-4.966l-.874.487-2.845-5.123A1.75 1.75 0 0 1 10.25 7.5m-4.703 6.375.875-.486-.97-1.748-.875.485A5 5 0 1 0 11.9 17.5h3.664a1.75 1.75 0 1 0 0-2H10v1a3 3 0 1 1-4.453-2.625"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Webhook;
