import React from "react";
const PoundCircle: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m11.22-3.75c-.973 0-1.838.852-1.838 2s.866 2 1.839 2H13.5a.75.75 0 0 1 0 1.5h-1.416c-.273.612-.601 1.22-.988 1.763q-.085.12-.175.237h3.613l.068-.005c.064-.007.156-.02.262-.046a1.3 1.3 0 0 0 .608-.315.75.75 0 1 1 1.056 1.065c-.425.421-.935.615-1.303.706a3.4 3.4 0 0 1-.474.082l-.222.013H8.941a.75.75 0 0 1-.333-1.422c.438-.217.866-.622 1.266-1.185.195-.274.377-.575.544-.893H8.5a.75.75 0 0 1 0-1.5h1.232a3.6 3.6 0 0 1-.6-2c0-1.89 1.453-3.5 3.339-3.5s3.338 1.61 3.338 3.5a.75.75 0 0 1-1.5 0c0-1.148-.865-2-1.838-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoundCircle;
