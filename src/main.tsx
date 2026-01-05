import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.css';

// const fallBack = () => {
// 	return <h1>Whoops! Something went wrong...</h1>
// }

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
