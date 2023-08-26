import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDTO {
  @ApiProperty({
    example: 'Pizza de calabresa',
  })
  name: string;

  @ApiProperty({
    example: 'Pizza feita com calabresa, queijo e molho de tomate',
  })
  description: string;

  @ApiProperty({
    example: 8800,
  })
  price: number;

  @ApiProperty({
    example: 'Pizza',
  })
  category: string;
}
