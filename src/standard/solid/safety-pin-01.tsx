import React from "react";
const SafetyPin_01: React.FC<
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
        d="M13.182 3.064c1.97-2.573 5.713-2.766 7.987-.434 2.267 2.327 2.077 6.151-.45 8.161l-.03.022-2.15 1.546a.75.75 0 0 1-.79.053 1 1 0 0 1-.095.094l-10.41 9a1 1 0 0 1-.177.123 3.5 3.5 0 1 1-4.946-4.946q.051-.094.123-.177l9-10.41q.074-.086.16-.15a.75.75 0 0 1 .04-.958zm-.355 4.248a1 1 0 0 1-.07.092l-7.324 8.472a3.51 3.51 0 0 1 2.441 2.441l8.472-7.324q.061-.053.129-.094a1.75 1.75 0 0 1 .254-2.248l.277-.261.046-.04c.526-.42.569-1.212.12-1.674-.4-.409-1.058-.436-1.625.178l-.009.01-.31.324a1.75 1.75 0 0 1-2.401.124M4.5 17.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SafetyPin_01;
