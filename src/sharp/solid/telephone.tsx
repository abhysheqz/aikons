import React from "react";
const Telephone: React.FC<
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
        d="M9 8.752a.75.75 0 0 0-.75.75v1.537L2.665 13.83a.75.75 0 0 0-.414.671v6.996a.75.75 0 0 0 .75.75h17.998a.75.75 0 0 0 .75-.75v-6.996a.75.75 0 0 0-.414-.67l-5.585-2.793V9.502a.75.75 0 0 0-.75-.75zm3 5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m1.437 10.561-.102-.981c-.163-1.565-.33-4.107 1.892-5.556 1.024-.667 2.152-1.21 3.747-1.635A19.7 19.7 0 0 1 12 1.752c1.709 0 3.422.211 5.026.637 1.596.424 2.723.968 3.747 1.635 2.221 1.449 2.055 3.991 1.892 5.556l-.102.981-6.48-2.548V4.024A18.4 18.4 0 0 0 12 3.575c-1.389 0-2.774.15-4.083.45v3.988z"
      />
    </svg>
  );
};
export default Telephone;
