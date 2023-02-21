import { getByTestId, render, screen } from "@testing-library/react"
import Start from "./pages/start/start"
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe('проверка роутера', () => {
    test('переход по ссылкам и поиск по тексту на странице', () => {
        render(<Start/>, {wrapper: MemoryRouter})
        const mainLink = screen.getByTestId('main__link')
        const aboutLink = screen.getByTestId('about__link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main')).toBeInTheDocument();
    })
})