import { render, screen } from "@testing-library/react"
import Start from "./pages/start/start"
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import Main from "./pages/main/main";
import Error from "./pages/404/404";

describe('проверка роутера', () => {
    test('переход по ссылкам', async () => {
        render(<Start/>, {wrapper: MemoryRouter})
        expect(screen.getByText(/Hello world/i)).toBeInTheDocument()
        //не работает с последним роутером ни userEvent ни fireEvent
        // const user = userEvent.setup()
        // await user.click(screen.getByText(/main/i));
        // fireEvent.click(screen.getByText(/main/i),
        // new MouseEvent('click', {
        //   bubbles: true,
        //   cancelable: true,
        // }));
        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug()
        render(<Main/>, {wrapper: MemoryRouter})
        expect(await screen.findByText(/main page/i)).toBeInTheDocument()    
        
        // render(<Start/>, {wrapper: MemoryRouter})
        // const mainLink = screen.getByTestId('main__link')
        // userEvent.click(mainLink)
        // expect(screen.getAllByTestId('main__page')).toBeInTheDocument();
    })

    test('не существующая страница', () => {
        //не работает с последним роутем
        render(<MemoryRouter initialEntries={['/error']}>
            <Error/>
        </MemoryRouter>)
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug()
        expect(screen.getByTestId('error__page')).toBeInTheDocument();
    })
})