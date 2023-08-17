// variants: [minute, minutes, minutes] | [минута, минуты, минут]

export function toCorrectNumeralForm(
  count: number,
  variants: string[]
): string {
  count = Math.abs(count) % 100;
  const divided = count % 10;
  if (count > 10 && count < 20) {
    return variants[2];
  }
  if (divided > 1 && divided < 5) {
    return variants[1];
  }
  if (divided == 1) {
    return variants[0];
  }
  return variants[2];
}
