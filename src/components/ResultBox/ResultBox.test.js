import { render, screen, cleanup } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from='PLN' to='USD' amount={100} />);
  });

  it('should render proper info about conversion whe PLN to USD', () => {
    const testCases = [
      { from: 'PLN', to: 'USD', amount: '100', result: 'PLN 100.00 = $28.57' },
      { from: 'PLN', to: 'USD', amount: '120', result: 'PLN 120.00 = $34.29' },
      { from: 'PLN', to: 'USD', amount: '121', result: 'PLN 121.00 = $34.57' },
      { from: 'PLN', to: 'USD', amount: '125', result: 'PLN 125.00 = $35.71' },
    ];

    for (const testObj of testCases) {
      render(
        <ResultBox
          from={testObj.from}
          to={testObj.to}
          amount={parseInt(testObj.amount)}
        />
      );

      const resultBox = screen.getByTestId('result-box');

      expect(resultBox).toBeDefined();
      expect(resultBox).toHaveTextContent(testObj.result);

      cleanup();
    }
  });
});
