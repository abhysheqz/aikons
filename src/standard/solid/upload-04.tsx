import React from "react";
const Upload_04: React.FC<
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
        d="M12 15.25a1 1 0 0 0 1-1v-6.5h1.5a1 1 0 0 0 .707-1.707l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5A1 1 0 0 0 9.5 7.75H11v6.5a1 1 0 0 0 1 1M3.836 15.764a1 1 0 0 1 1.15.822l.222 1.329a1 1 0 0 0 .986.835h11.612a1 1 0 0 0 .986-.835l.222-1.33a1 1 0 1 1 1.973.33l-.222 1.328a3 3 0 0 1-2.96 2.507H6.196a3 3 0 0 1-2.96-2.507l-.221-1.328a1 1 0 0 1 .822-1.151"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upload_04;
