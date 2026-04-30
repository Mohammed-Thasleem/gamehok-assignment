import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
} from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMountLoading } from '@/hooks/useMountLoading';

describe('useMountLoading', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns true immediately on mount', () => {
    const { result } = renderHook(() => useMountLoading(900));
    expect(result.current).toBe(true);
  });

  it('returns false after the specified delay elapses', () => {
    const { result } = renderHook(() => useMountLoading(900));
    act(() => {
      vi.advanceTimersByTime(900);
    });
    expect(result.current).toBe(false);
  });

  it('remains true before the delay completes', () => {
    const { result } = renderHook(() => useMountLoading(900));
    act(() => {
      vi.advanceTimersByTime(500); // not yet done
    });
    expect(result.current).toBe(true);
  });

  it('uses the default 1000ms delay when no argument is provided', () => {
    const { result } = renderHook(() => useMountLoading());
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(result.current).toBe(true);
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(result.current).toBe(false);
  });

  it('clears the timeout on unmount (no state-update-on-unmounted-component warning)', () => {
    const { result, unmount } = renderHook(() =>
      useMountLoading(900),
    );
    // Unmount before the timer fires
    unmount();
    // Advance past delay — should not throw
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    // Hook cleaned up; result stays at initial (true) — no setState on dead component
    expect(result.current).toBe(true);
  });

  it('respects a very short delay of 0ms', () => {
    const { result } = renderHook(() => useMountLoading(0));
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(result.current).toBe(false);
  });

  it('respects a custom long delay', () => {
    const { result } = renderHook(() => useMountLoading(5000));
    act(() => {
      vi.advanceTimersByTime(4999);
    });
    expect(result.current).toBe(true);
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(result.current).toBe(false);
  });
});
