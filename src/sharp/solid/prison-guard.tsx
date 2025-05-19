import React from "react";
const PrisonGuard: React.FC<
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
        d="M12.27 1.3a.75.75 0 0 0-.54 0l-6.5 2.5a.75.75 0 0 0-.42.995L5.864 7.25H5v1.5h14v-1.5h-.863l1.052-2.455a.75.75 0 0 0-.42-.995z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.75 8v2a4.25 4.25 0 0 0 8.5 0V8h1.5v2a5.75 5.75 0 0 1-11.5 0V8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m9.75 16.599 2.25 1.5 2.25-1.5V14h1.5v2.434l6.456 1.845a.75.75 0 0 1 .544.721v3a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .544-.721l6.456-1.845V14h1.5z"
      />
    </svg>
  );
};
export default PrisonGuard;
