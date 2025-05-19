import React from "react";
const Mouse_18: React.FC<
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
        d="M12.75 5.988V1.5c.406.502 1.155.992 2.123 1.423 1.043.464 2.22.807 3.177 1.014l.36.078.158.33c1.76 3.675 2.155 7.635 1.109 10.975-1.053 3.363-3.56 6.057-7.48 7.126L12 22.5l-.197-.054c-3.92-1.07-6.427-3.763-7.48-7.126-1.046-3.34-.651-7.3 1.11-10.974l.158-.331.36-.078c.956-.207 2.133-.55 3.177-1.014.967-.43 1.716-.92 2.122-1.423v4.488h-.75a.75.75 0 0 0-.75.75v3.996c0 .414.336.75.75.75h.75v1.248h1.5v-1.249h.75a.75.75 0 0 0 .75-.75V6.739a.75.75 0 0 0-.75-.75z"
      />
      <path fill="currentColor" d="M11.25 9.985V7.487h1.5v2.498z" />
    </svg>
  );
};
export default Mouse_18;
