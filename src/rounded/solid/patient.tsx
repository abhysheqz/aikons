import React from "react";
const Patient: React.FC<
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
        d="M14.055 12.25c1.367 0 2.47 0 3.337.116.9.121 1.658.38 2.26.982s.86 1.36.982 2.26c.116.867.116 1.97.116 3.337V22a.75.75 0 0 1-1.5 0v-3c0-1.436-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.4-.277-.276-.665-.456-1.4-.555-.755-.101-1.756-.103-3.191-.103h-4c-1.435 0-2.437.002-3.192.103-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.399-.101.755-.103 1.756-.103 3.192 0 .476 0 .796.017 1.043.017.24.046.358.078.435.127.306.37.55.677.677.077.032.194.061.435.078.247.017.567.017 1.043.017a.75.75 0 0 1 0 1.5h-.025c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19 2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907-.021-.304-.021-.755-.021-1.2 0-1.368 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.982.867-.116 1.97-.116 3.337-.116z"
      />
      <path
        fill="currentColor"
        d="M9.353 12.265a.75.75 0 0 1 .858.498l3 9a.75.75 0 0 1-.711.987H7a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 .603-.735z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 19a.75.75 0 0 1 .75-.75h2.5a2.25 2.25 0 1 1 0 4.5h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 0 0-1.5H12a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
      />
    </svg>
  );
};
export default Patient;
