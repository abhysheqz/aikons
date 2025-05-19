import React from "react";
const AiAudio: React.FC<
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
        d="M19.692 1.25h-1.407l-.258.697c-.361.978-.477 1.244-.667 1.434s-.456.306-1.434.668l-.697.258v1.407l.697.258c.978.362 1.244.477 1.434.667s.306.456.668 1.435l.257.697h1.407l.258-.697c.362-.979.478-1.245.668-1.435s.456-.305 1.434-.667l.697-.258V4.307l-.697-.258c-.978-.362-1.244-.478-1.434-.668s-.306-.456-.668-1.434zm-5.713 4H1.25v17.5h20.5V7.427a6 6 0 0 0-.24.104c-.075.16-.203.477-.388.976l-.56 1.514h-3.147l-.56-1.514a16 16 0 0 0-.387-.976c-.16-.074-.477-.202-.976-.387l-1.514-.56zm-2.729 4v9.5h1.5v-9.5zm-3 7.5v-5.5h1.5v5.5zm-3-4.5v3.5h1.5v-3.5zm10.5 4.5v-5.5h-1.5v5.5zm3-4.5v3.5h-1.5v-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiAudio;
