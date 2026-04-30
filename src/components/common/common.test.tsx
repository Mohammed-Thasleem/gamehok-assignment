import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { StatusPill } from "@/components/common/StatusPill";
import { SectionTitle } from "@/components/common/SectionTitle";
import { renderWithProviders } from "../renderWithProviders";

// ─── StatusPill ──────────────────────────────────────────────────────────────

describe("StatusPill", () => {
  it("renders the label text", () => {
    renderWithProviders(<StatusPill label="Registration Open" />);
    expect(screen.getByText("Registration Open")).toBeInTheDocument();
  });

  it("applies highlight styles when highlight=true", () => {
    renderWithProviders(<StatusPill label="BGMI" highlight />);
    const pill = screen.getByText("BGMI");
    expect(pill.className).toMatch(/bg-primary-inverted/);
    expect(pill.className).toMatch(/text-foreground/);
  });

  it("applies muted styles when highlight=false (default)", () => {
    renderWithProviders(<StatusPill label="Solo" />);
    const pill = screen.getByText("Solo");
    expect(pill.className).toMatch(/text-muted-foreground/);
  });

  it("renders an empty label without crashing", () => {
    renderWithProviders(<StatusPill label="" />);
  });

  it("renders a very long label without crashing", () => {
    const longLabel = "A".repeat(200);
    renderWithProviders(<StatusPill label={longLabel} />);
    expect(screen.getByText(longLabel)).toBeInTheDocument();
  });
});

// ─── SectionTitle ────────────────────────────────────────────────────────────

describe("SectionTitle", () => {
  it("renders the section title", () => {
    renderWithProviders(<SectionTitle title="Featured Tournaments" />);
    expect(screen.getByText("Featured Tournaments")).toBeInTheDocument();
  });

  it("renders View All text when showViewAll=true", () => {
    renderWithProviders(<SectionTitle title="Battles" showViewAll />);
    expect(screen.getByText(/view all/i)).toBeInTheDocument();
  });

  it("does not render View All when showViewAll is false", () => {
    renderWithProviders(<SectionTitle title="Games" showViewAll={false} />);
    expect(screen.queryByText(/view all/i)).not.toBeInTheDocument();
  });
});
