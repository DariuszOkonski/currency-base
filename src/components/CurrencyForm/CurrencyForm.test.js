import { render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });

  it('should run action callback with proper data on form submit', () => {
    const action = jest.fn();
    render(<CurrencyForm action={action} />);

    const submitButton = screen.getByText('Convert');

    userEvent.click(submitButton);

    expect(action).toHaveBeenCalledTimes(1);
  });
});
