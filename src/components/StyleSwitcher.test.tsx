import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store'; // <— igual aquí, subir 1 nivel
import StyleSwitcher from './StyleSwitcher';

describe('StyleSwitcher', () => {
  it('cambia estilos al hacer clic en el botón', () => {
    render(
      <Provider store={store}>
        <StyleSwitcher />
      </Provider>
    );

    const button = screen.getByRole('button', { name: /cambiar estilo/i });
    fireEvent.click(button);
    expect(screen.getByText(/Texto con estilo 2/i)).toBeInTheDocument();
  });
});
