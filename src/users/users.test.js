import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Users from './users';
import axios from 'axios';

jest.mock('axios')

describe('Testing react app', () => {
  let response;
  beforeEach(() => {
      response = {
          data: [
              {
                  "id": 1,
                  "name": "Leanne Graham",
                  
                },
                {
                  "id": 2,
                  "name": "Ervin Howell",
                  
                },
                {
                  "id": 3,
                  "name": "Clementine Bauch",
                }
          ]
      }
  })

  test('получение данных', async () => {
    axios.get.mockReturnValue(response)
    render(<Users/>)

    const users = await screen.findAllByTestId('user__item')
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1)
  
})

})

