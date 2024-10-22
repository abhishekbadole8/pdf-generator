interface ICustomButton {
  title: string;
  handlePress: (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void;
  otherStyles?: any;
  isLoading?: boolean;
}

export default function CustomButton({
  title,
  handlePress,
  otherStyles = "",
  isLoading = false,
}: ICustomButton) {
  return (
    <button
      className={`flex items-center gap-x-2 bg-button-primary min-h-[41px] text-sm font-medium rounded-md py-3 px-4 ${otherStyles} ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isLoading}
      style={{ fontFamily: "Pretendard, sans-serif" }}
      onClick={handlePress}
    >
      {title}
      {isLoading && (
        // Here Loading animation
        <>
          <svg
            className="animate-spin h-4 w-4 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </>
      )}
    </button>
  );
}
