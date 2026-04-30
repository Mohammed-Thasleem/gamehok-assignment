/**
 * utils/renderWithProviders.tsx
 *
 * Central render helper that wraps components in all required providers.
 * Add new providers here once — every test gets them automatically.
 */
import { type ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MemoryRouter, type MemoryRouterProps } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Options extends Omit<RenderOptions, "wrapper"> {
  routerProps?: MemoryRouterProps;
}

const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

export const renderWithProviders = (ui: ReactNode, options: Options = {}) => {
  const { routerProps, ...renderOptions } = options;
  const queryClient = makeQueryClient();

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter {...routerProps}>{children}</MemoryRouter>
    </QueryClientProvider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

/** Shortcut: render inside a specific route so useParams works */
export const renderOnRoute = (ui: ReactNode, initialEntries: string[]) =>
  renderWithProviders(ui, { routerProps: { initialEntries } });
