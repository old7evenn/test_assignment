
export const ErrorMessage = ({ error='' }: { error: string | undefined }) => {
  return error && <p className="text-xs text-red-500">{error}</p>
}
