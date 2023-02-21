import { fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Start from './start';
import { MemoryRouter } from 'react-router-dom';

describe('Testing react app', () => {
  test('Инпут, батон и хелло ворлд есть на странице', () => {
    render(<Start />, {wrapper: MemoryRouter});
    const helloWorldElement = screen.getByText(/Hello world/i);
    const button = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(helloWorldElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
  
  test('отсутствие элемента с тесктом хелло', () => {
    render(<Start />, {wrapper: MemoryRouter});
    const helloElement = screen.queryByText(/хелло/i);
    expect(helloElement).toBeNull();
  });

  test('асинхронный поиск через find', async () => {
    render(<Start />, {wrapper: MemoryRouter});
    const objectElement = await screen.findByText(/Jest react testing/i);
    expect(objectElement).not.toBeNull();
    expect(objectElement).toBeInTheDocument();
    expect(objectElement).toHaveStyle({color: 'red'});
  });

  test('событие клика', async () => {
    render(<Start />, {wrapper: MemoryRouter});
    const btn = screen.getByTestId('toggle__btn');
    expect(screen.queryByTestId('toggle__text')).toBeNull()
    fireEvent.click(btn)
    expect(screen.getByTestId('toggle__text')).toBeInTheDocument();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle__text')).toBeNull();
  });

  test('событие инпута', async () => {
    render(<Start />, {wrapper: MemoryRouter});
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('input__title')).toContainHTML('')
    //fireEvent искусственное событие userEvent более полная эмуляция
    fireEvent.input(input, {
      target: {value: '123'}
    })

    // userEvent.type(input, '123')
    expect(screen.queryByTestId('input__title')).toContainHTML('123')

  });

})

