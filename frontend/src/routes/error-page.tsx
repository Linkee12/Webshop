import { useRouteError } from "react-router-dom";
export interface RouteError {
  message: string;
  status?: number;
  statusText?: string;
  data?: unknown;
}
export default function ErrorPage() {
  const error: RouteError = useRouteError();
  console.error(error);
  if (error) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }
}
