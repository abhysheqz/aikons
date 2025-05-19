import React from "react";
const AiBook: React.FC<
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
        d="M3 4a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-.138a1.48 1.48 0 0 0-.362 1c0 .425.154.773.362 1H20a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3zm3 15h11.64a3.63 3.63 0 0 0 0 2H6a1 1 0 1 1 0-2m4.222-12.75a.75.75 0 0 0-.703.49l-2.222 6a.75.75 0 0 0 1.407.52l.707-1.91h2.178l.708 1.91a.75.75 0 0 0 1.406-.52l-2.222-6a.75.75 0 0 0-.703-.49zm.812 3.6H9.967l.533-1.44zM16.25 7a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBook;
