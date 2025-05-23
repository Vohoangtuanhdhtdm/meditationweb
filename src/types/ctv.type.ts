export interface CTVDto {
  id: string;
  name: string;
  userId: string;
  positionId: string;
}

export interface CreateCTVDto {
  name: string;
  userId: string;
  positionId: string;
}

export interface PositionDto {
  id: string;
  name: string;
  ctvs: CTVDto[];
}

export interface CreatePositionDto {
  name: string;
}
