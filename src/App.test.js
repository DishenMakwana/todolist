import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Table  - First Row Task', () => {
    render(<App />);
    const linkElement = screen.getByText('hello');
    expect(linkElement).toBeInTheDocument();
});
