interface VapiError {
  error: {
    statusCode: number;
    error: string;
  };
}

interface IsPublicKeyMissingErrorProps {
  vapiError: VapiError | null; // Assuming vapiError can be null or undefined
}

export const isPublicKeyMissingError = ({
  vapiError
}: IsPublicKeyMissingErrorProps): boolean => {
  return (
    !!vapiError &&
    vapiError.error.statusCode === 403 &&
    vapiError.error.error === "Forbidden"
  );
};
