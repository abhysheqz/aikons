import React from "react";
const GeometricShapes_02: React.FC<
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
        d="M12.375 5.266c-.206-.002-.309-.003-.368.058-.06.06-.057.169-.05.385q.003.096.003.193A6.1 6.1 0 0 1 5.706 12c-.215-.006-.322-.008-.383.051-.06.06-.06.162-.057.366l.076 8.541c.09.636.31 1.374 1.05 1.681s1.417-.06 1.93-.447c.526-.395 1.155-1.025 1.916-1.785l10.167-10.167c.76-.761 1.39-1.39 1.786-1.917.386-.513.753-1.19.447-1.93-.307-.74-1.045-.96-1.68-1.05z"
        clipRule="evenodd"
      />
      <circle cx={5.941} cy={5.992} r={4.5} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.032 19.727c-.24.24-.36.36-.37.552s.072.293.237.496q.072.088.156.172c.455.456 1.022.641 1.65.726.595.08 1.344.08 2.242.08h1.104c.899 0 1.648 0 2.243-.08.628-.085 1.194-.27 1.65-.726s.641-1.022.725-1.65c.08-.595.08-1.344.08-2.242V15.95c0-.899 0-1.648-.08-2.243-.084-.628-.27-1.194-.725-1.65a2 2 0 0 0-.18-.162c-.203-.163-.305-.245-.496-.235s-.311.13-.55.37z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GeometricShapes_02;
