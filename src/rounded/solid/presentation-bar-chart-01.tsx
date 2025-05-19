import React from "react";
const PresentationBarChart_01: React.FC<
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
        d="M12 17a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-3.988a1 1 0 0 1-.375.769l-5 4a1 1 0 0 1-1.25-1.562l5-4a1 1 0 0 1 1.625.772A1 1 0 0 1 12 17M14.625 17.22a1 1 0 0 0-1.25 1.56l5 4a1 1 0 0 0 1.25-1.56z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 12.188c0 3.093 0 4.64.948 5.6.948.962 2.474.962 5.526.962h7.552c3.052 0 4.578 0 5.526-.961s.948-2.508.948-5.602V7.814c0-3.094 0-4.64-.948-5.602-.948-.961-2.474-.961-5.526-.961H8.224c-3.052 0-4.578 0-5.526.961S1.75 4.72 1.75 7.813zM13 7a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-4 3a1 1 0 0 0-2 0v3a1 1 0 1 0 2 0zm7 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationBarChart_01;
