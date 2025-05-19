import React from "react";
const Castle_02: React.FC<
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
        d="M16.426 1.383A.75.75 0 0 1 16.75 2c0 1.527-.777 2.676-1.785 3.325-.66.424-1.453.653-2.215.612V8a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 1.033-.695c.713.29 1.2.408 1.669.409.473 0 .996-.117 1.782-.415a.75.75 0 0 1 .692.084"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.252 7.947A.75.75 0 0 1 4 7.25h2.5a.75.75 0 0 1 .696.471l.749 1.872a.25.25 0 0 0 .232.157h.646a.25.25 0 0 0 .232-.157l.749-1.872a.75.75 0 0 1 .696-.471h3a.75.75 0 0 1 .696.471l.749 1.872a.25.25 0 0 0 .232.157h.646a.25.25 0 0 0 .232-.157l.749-1.872a.75.75 0 0 1 .696-.471H20a.75.75 0 0 1 .748.697l1 14a.75.75 0 0 1-.748.803h-5.068l-1.034-5.098a1.75 1.75 0 0 0-1.715-1.402H10.82a1.75 1.75 0 0 0-1.716 1.408L8.088 22.75H3a.75.75 0 0 1-.748-.803zM13.428 17.95l.974 4.8H9.618l.957-4.799a.25.25 0 0 1 .245-.201h2.363a.25.25 0 0 1 .245.2M11 13.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Castle_02;
