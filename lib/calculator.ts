export type CalculatorInput = {
  distanceKm: number;
  rooms: number;
  floor: number;
  hasElevator: boolean;
};

const BASE_PRICE = 299;
const PRICE_PER_KM = 1.15;
const PRICE_PER_ROOM = 165;
const FLOOR_WITH_ELEVATOR = 18;
const FLOOR_WITHOUT_ELEVATOR = 52;

export function calculateMovePrice(input: CalculatorInput): number {
  const { distanceKm, rooms, floor, hasElevator } = input;

  const distanceCost = Math.max(0, distanceKm) * PRICE_PER_KM;
  const roomsCost = Math.max(1, rooms) * PRICE_PER_ROOM;
  const floorMultiplier = hasElevator ? FLOOR_WITH_ELEVATOR : FLOOR_WITHOUT_ELEVATOR;
  const floorCost = Math.max(0, floor) * floorMultiplier;

  const subtotal = BASE_PRICE + distanceCost + roomsCost + floorCost;

  return Math.round(subtotal / 10) * 10;
}

export const CALCULATOR_DEFAULTS: CalculatorInput = {
  distanceKm: 50,
  rooms: 3,
  floor: 2,
  hasElevator: true,
};
