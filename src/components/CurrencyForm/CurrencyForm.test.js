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

  it('should call action with correct data when form is filled and submitted', () => {
    const action = jest.fn();
    render(<CurrencyForm action={action} />);

    const amountField = screen.getByTestId('amount');
    const fromField = screen.getByTestId('from-select');
    const toField = screen.getByTestId('to-select');
    const submitButton = screen.getByText('Convert');

    userEvent.type(amountField, '100');
    userEvent.selectOptions(fromField, 'PLN');
    userEvent.selectOptions(toField, 'USD');

    userEvent.click(submitButton);

    expect(action).toHaveBeenCalledTimes(1);
    expect(action).toHaveBeenCalledWith({
      amount: 100,
      from: 'PLN',
      to: 'USD',
    });
  });
});
