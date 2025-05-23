import React from "react";
const Tongue: React.FC<
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
        d="M3.861 9.302c.35.604.802 1.267 1.354 1.839L3.81 12.457c-1.266-1.31-2.057-2.938-2.4-3.738l-.16-.372.16-.372c.31-.724.98-2.11 2.028-3.33 1.04-1.21 2.573-2.395 4.604-2.395 1.404 0 2.492.787 3.22 1.545.215.223.487.492.737.736.25-.244.522-.513.737-.736.729-.758 1.817-1.545 3.221-1.545 2.031 0 3.565 1.185 4.604 2.396 1.048 1.22 1.719 2.606 2.03 3.33l.159.372-.16.372c-.343.8-1.135 2.428-2.401 3.737l-1.405-1.316c.552-.572 1.005-1.234 1.354-1.838h-1.834v-1.91h1.835A10 10 0 0 0 19.08 5.88c-.874-1.018-1.916-1.72-3.123-1.72-.632 0-1.245.359-1.813.95-.288.299-.659.662-.951.946-.148.142-1.1 1.045-1.194 1.134l-1.193-1.134a41 41 0 0 1-.951-.947c-.568-.59-1.18-.948-1.813-.948-1.207 0-2.25.7-3.123 1.718-.42.49-.774 1.022-1.058 1.514h1.836v1.91z"
      />
      <path
        fill="currentColor"
        d="M9.934 8.25a3.205 3.205 0 0 0-3.11 2.48l-.964 3.235-.012.048c-.9 3.946 2.059 7.737 6.088 7.737s6.987-3.79 6.088-7.737l-.012-.048-.964-3.235a3.205 3.205 0 0 0-3.11-2.48c-.436 0-.86.09-1.252.257V15h-1.5V8.507a3.2 3.2 0 0 0-1.252-.257"
      />
    </svg>
  );
};
export default Tongue;
